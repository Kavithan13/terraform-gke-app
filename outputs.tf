# GKE Outputs
output "gke_cluster_name" {
  value = module.gke.cluster_name
}

output "gke_endpoint" {
  value = module.gke.endpoint
}

# SQL Outputs
output "db_instance_name" {
  value = module.sql.db_instance_name
}

output "database_name" {
  value = module.sql.db_name
}