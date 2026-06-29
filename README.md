# 🚀 Kubernetes GitOps Platform on GKE

---

## 📌 Project Overview

This repository implements a **production-ready DevOps platform on Google Cloud Platform (GCP)** using:

- Terraform for infrastructure provisioning
- Kubernetes (GKE) for container orchestration
- ArgoCD for GitOps-based deployment
- NGINX Ingress for external access
- Datadog for observability and monitoring

This setup ensures **automated, scalable, and reliable deployments** using Git as the single source of truth.

---

## ⚙️ Technology Stack

| Layer | Tools |
|------|------|
| Infrastructure | Terraform |
| Orchestration | Kubernetes (GKE) |
| Deployment | ArgoCD (GitOps) |
| Networking | NGINX Ingress |
| Monitoring | Datadog |
| Containerization | Docker |

---

## 🔄 GitOps Workflow

1. Developer updates Kubernetes manifests in Git repository  
2. ArgoCD monitors the repository continuously  
3. ArgoCD detects changes automatically  
4. ArgoCD synchronizes the cluster state  
5. Application is deployed to GKE  
6. Application is exposed via Ingress  

---

## ☸️ Kubernetes Components

- Namespace: `dev`
- Deployments:
  - Frontend Application
  - Backend Application
- Services:
  - ClusterIP / LoadBalancer
- Ingress:
  - HTTPS enabled via TLS
- Configuration:
  - Environment variables
  - Kubernetes Secrets

---

## 🚀 Deployment Commands

```bash
# Deploy application
kubectl apply -f k8s/

# Trigger ArgoCD sync
kubectl annotate application dev-app -n argocd \
  argocd.argoproj.io/refresh=hard --overwrite

# Verify resources
kubectl get pods -n dev
kubectl get svc -n dev
kubectl get ingress -n dev

# Debugging
kubectl logs <pod-name> -n dev
kubectl describe pod <pod-name> -n dev

---

## 🔁 Rollback Strategy

Kubernetes supports easy rollback to previous versions.

```bash
kubectl rollout undo deployment/frontend -n dev
kubectl rollout undo deployment/backend -n dev

---

## 📊 Observability

Observability is implemented using Datadog:

Application logs are collected
Metrics monitored:

CPU usage
Memory usage
Pod health

Alerts configured for threshold breaches

This helps in monitoring system performance and troubleshooting issues.

---

## 🔒 Security

Security best practices implemented:
- Kubernetes Secrets for sensitive data
- Role-Based Access Control (RBAC)
- TLS enabled via Ingress (HTTPS)
- No hardcoded credentials in code

This ensures secure deployment and access control.

---

## 💰 Cost Optimization

- Scaled replicas to zero during idle time
- Stopped ArgoCD when not in use
- Removed unnecessary workloads
- Deleted cluster after testing

This helps reduce cloud costs and optimize resource usage.

---

## 🧯 Troubleshooting

Pods automatically recreating
Cause: Managed by ArgoCD (GitOps)
Fix: Update replicas in Git and sync ArgoCD

ArgoCD OutOfSync:

kubectl annotate application dev-app -n argocd \
  argocd.argoproj.io/refresh=hard --overwrite

Deployment issues:

kubectl logs <pod-name> -n dev
kubectl describe pod <pod-name> -n dev

---

## 🏁 Conclusion

This project demonstrates a production-ready Kubernetes deployment platform on GKE using GitOps principles with ArgoCD.
It enables:
- Automated and consistent deployments  
- Scalable and reliable infrastructure  
- Secure application management  
- Real-time monitoring with Datadog  
- Cost optimization through resource control  

Overall, this setup provides a robust, efficient, and industry-standard DevOps solution on GCP.
