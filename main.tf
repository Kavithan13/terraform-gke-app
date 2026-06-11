# -----------------------
# GKE Cluster
# -----------------------
module "gke" {
  source = "./modules/gke"

  cluster_name = var.cluster_name
  gke_zone     = var.gke_zone
  node_count   = var.node_count
  machine_type = var.machine_type
}

# -----------------------
# Cloud SQL
# -----------------------
module "sql" {
  source = "./modules/sql"

  db_name     = var.db_name
  region      = var.region
  db_user     = var.db_user
}

# -----------------------
# App Deployment
# -----------------------
resource "null_resource" "deploy_app" {
  depends_on = [module.gke]

  provisioner "local-exec" {
    command = <<EOT

gcloud container clusters get-credentials ${var.cluster_name} --region ${var.region} --project ${var.project_id}

# Create namespaces first
kubectl apply -f k8s/dev/namespace.yaml
kubectl apply -f k8s/qa/namespace.yaml

# Wait for namespaces (important)
sleep 10

# Then apply rest
kubectl apply -f k8s/dev/
kubectl apply -f k8s/qa/

EOT
  }
}