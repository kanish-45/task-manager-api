
## Author

Kanish Kaarthick

# DevOps CI/CD Pipeline with Kubernetes

This project demonstrates a production-style DevOps pipeline for deploying a Node.js application using Docker, GitHub Actions, and Kubernetes.

## Architecture

Developer → GitHub → GitHub Actions → Docker Image → DockerHub → Kubernetes Deployment → Pods → Service → User

## Features

- Containerized Node.js API using Docker
- Automated CI/CD pipeline using GitHub Actions
- Docker images pushed to DockerHub
- Kubernetes deployment with 5 replicas
- Readiness and liveness probes for health checks
- Rolling updates and rollback support
- Resource limits for CPU and memory
- ConfigMaps for external configuration

## Tech Stack

- Node.js
- Docker
- GitHub Actions
- DockerHub
- Kubernetes
- Minikube

## Kubernetes Components

- Deployment
- Service (NodePort)
- ConfigMap
- Health Probes

## CI/CD Workflow

1. Developer pushes code to GitHub
2. GitHub Actions builds Docker image
3. Image pushed to DockerHub
4. Kubernetes pulls image and deploys application

## Project Structure
