# 🚀 Node.js CI/CD Product API

A fast, lightweight RESTful API built with Node.js and Express, containerized using Docker, and fully automated with a GitHub Actions CI/CD pipeline. This project demonstrates modern DevOps practices by integrating development, testing, containerization, and deployment.

---

## 📖 Description

This project serves as a demonstration of a complete CI/CD pipeline for a simple web application. It features a REST API for managing product data, written in Express.js. The application is containerized using Docker and continuously built, tested, and deployed through GitHub Actions.


---

## 🌟 Features

- ⚡ RESTful API endpoints for product data
- 📦 Dockerized application for consistent deployment
- 🔁 GitHub Actions CI/CD pipeline:
  - Auto builds
  - Runs tests
  - Pushes Docker image to DockerHub
- 🩺 Health check route (`/health`)
- 💬 JSON-based API responses
- 🚀 Runs on port `8080` (can be changed easily)
- 💻 Compatible with Docker Desktop, Linux, WSL, or Vagrant

---

## 🛠 Installation Instructions

### ✅ Prerequisites

- [Node.js](https://nodejs.org/en/) v18+
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- A GitHub account (for CI/CD setup)
- DockerHub account (for image hosting)

---

### 📥 Clone the Repository

```bash
git clone https://github.com/<your-username>/nodejs-ci-cd-demo.git
cd nodejs-ci-cd-demo

🐳 DockerHub Image
You can also pull and run the app directly:

docker pull rajeshwararao78/nodejs-ci-cd-demo
docker run -p 8080:8080 rajeshwararao78/nodejs-ci-cd-demo

## 📸 Screenshots

### ✅ Home Route (`/`)
![Home Page](./169f85a9-a337-4e9f-8f64-ff1cb510d775.png)

---

### ✅ Health Check (`/health`)
![Health Check](./725a77de-d2d1-4086-bd92-ffb0f2305f96.png)
