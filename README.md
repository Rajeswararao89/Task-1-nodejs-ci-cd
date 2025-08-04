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

👨‍💻 Author
Rajeswara Rao
CI/CD Task for Internship — Completed on: August 4, 2025

📬 Contact Information
If you have questions, suggestions, or would like to collaborate:

Rajeswara Rao
📧 Email: rajeswararao688@gmail.com
🔗 GitHub: https://github.com/Rajeswararao89
🐳 DockerHub: https://hub.docker.com/u/rajeswararao89
