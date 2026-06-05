````markdown
# The Data Hub

A simple REST API server built using Node.js and Express.  
This project was created to understand REST architecture, CRUD operations, middleware, and API testing using ThunderClient/Postman.

---

## Features

- Express server setup
- REST API endpoints
- In-memory database using array
- CRUD operations
- Custom middleware logging
- Mock login API with JWT response
- Tested using Thunder Client

---

## Tech Stack

- Node.js
- Express.js

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | /health | Checks server status |
| GET | api/posts | Get all blog posts |
| GET | api/posts/:id | Get single blog post |
| POST | api/posts | Create new post |
| PUT | api/posts/:id | Update a post |
| DELETE | api/posts/:id | Delete a post |
| POST | auth/login | Mock login route |

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Spoorthy0/Prodesk-week9.git
```

Move into project folder:

```bash
cd data-hub
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node server.js
```

---

## Server

Server runs on:

```bash
http://localhost:5000
```

---

## Sample Blog Data

```json
{
  "id": 1,
  "title": "Morning Walk",
  "content": "Went for a walk today."
}
```

---

## Sample Login Request

```json
{
  "username": "admin",
  "password": "1234"
}
```

---

## Middleware Logging

Every request logs:

```bash
[GET] /posts - 10:05 AM
```

---

## Deployment

This project is deployed on Render.

---
````
