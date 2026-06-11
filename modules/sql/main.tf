# -----------------------------
# Fetch DB password from Secret Manager
# -----------------------------
data "google_secret_manager_secret_version" "db_password" {
  secret  = "db-password"
  version = "latest"
}

# -----------------------------
# Cloud SQL Instance
# -----------------------------
resource "google_sql_database_instance" "db_instance" {
  name             = "${var.db_name}-instance"
  database_version = "MYSQL_8_0"
  region           = var.region
  
  deletion_protection = false   
  
  settings {
    tier = "db-f1-micro"
  }
}

# -----------------------------
# Database
# -----------------------------
resource "google_sql_database" "db" {
  name     = var.db_name
  instance = google_sql_database_instance.db_instance.name
}

# -----------------------------
# DB User (password from Secret Manager)
# -----------------------------
resource "google_sql_user" "user" {
  name     = "dbuser"
  instance = google_sql_database_instance.db_instance.name

  password = data.google_secret_manager_secret_version.db_password.secret_data
}
