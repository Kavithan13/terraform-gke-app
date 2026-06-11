resource "google_container_cluster" "cluster" {
  name     = var.cluster_name
  location = var.gke_zone

  deletion_protection = false

  initial_node_count = 2

  node_config {
    machine_type = "e2-small"   
    disk_size_gb = 20       

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform"
    ]
  }

  networking_mode = "VPC_NATIVE"
}