# SIT323 Task 9.1P – MongoDB Integration with a Containerized Microservice

This project demonstrates how to integrate a MongoDB database into a Node.js microservice and deploy it within a Kubernetes cluster using Minikube. It includes full CRUD operations via a REST API.

---

## 🛠 Technologies Used

- Node.js + Express
- MongoDB
- Docker
- Kubernetes (Minikube)
- Postman / curl for testing

---

## 📁 Project Structure

sit323-9.1p/
├── backend/
│ ├── Dockerfile
│ ├── server.js
│ ├── db.js
│ └── package.json
├── k8s/
│ ├── app-deployment.yaml
│ ├── app-service.yaml
│ ├── mongo-deployment.yaml
│ ├── mongo-service.yaml
│ ├── mongo-pvc.yaml
├── README.md

---

## 🚀 Setup Instructions

### 🔹 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org)
- [Minikube](https://minikube.sigs.k8s.io/)
- [kubectl CLI](https://kubernetes.io/docs/tasks/tools/)

---

### 🔹 1. Start Minikube

```bash
minikube start --driver=docker
```

---

### 🔹 2. Build and Push Docker Image

```bash
docker build -t <your-dockerhub-username>/sit323-app:latest ./backend
docker push <your-dockerhub-username>/sit323-app:latest
```

> Example:
> `docker build -t ammaar11aslam/sit323-app:latest ./backend`

---

### 🔹 3. Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

To restart your app:

```bash
kubectl rollout restart deployment sit323-app
```

---

### 🔹 4. Access the App

```bash
minikube service app-service
```

This will open the app in your browser or return a URL like:

```
http://127.0.0.1:63403
```

---

## 📡 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/items`     | Fetch all items   |
| POST   | `/items`     | Add a new item    |
| PUT    | `/items/:id` | Update item by ID |
| DELETE | `/items/:id` | Delete item by ID |

---

## 🧪 Example Payload

```json
{
  "name": "Test Item",
  "quantity": 3
}
```

---

## ✅ Testing Tools

- Postman
- curl
