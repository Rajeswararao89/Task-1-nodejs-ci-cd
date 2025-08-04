# � Node.js CI/CD Product API

A professional RESTful API built with Node.js and Express, containerized with Docker, and deployed using GitHub Actions.

## � Features

- Express.js web app
- In-memory product storage (no DB)
- REST API routes
- Dockerized for easy deployment
- CI/CD automation with GitHub Actions

## � API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | Welcome message          |
| GET    | `/health`      | Health check             |
| GET    | `/products`    | List all products        |
| POST   | `/products`    | Add a product (JSON body)|

### Example POST `/products` body:
```json
{
  "name": "Keyboard",
  "price": 200
}
� Tech Stack
Node.js

Express.js

Docker

GitHub Actions (CI/CD)

�‍� Author
Rajeswara Rao
CI/CD Task for Internship — Completed on: August 4, 2025
