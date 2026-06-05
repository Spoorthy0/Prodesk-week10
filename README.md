# The Data Hub

A REST API built with Node.js, Express, and MongoDB. Supports blog post management and user authentication with full CRUD operations, Mongoose models, and custom middleware logging.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv

---

## Project Structure

```
week10/
├── server.js
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── postController.js
├── middleware/
│   └── urlLogger.js
├── models/
│   ├── Post.js
│   └── User.js
└── routes/
    ├── authRoutes.js
    └── postRoutes.js
```

---

## Installation

```bash
git clone https://github.com/Spoorthy0/Prodesk-week10.git
cd week10
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the server:

```bash
npm run dev
```

Server runs on `http://localhost:5000`

---

## API Endpoints

### Health

| Method | Route     | Description         |
|--------|-----------|---------------------|
| GET    | /health   | Check server status |

---

### Auth — `/auth`

| Method | Route          | Description              |
|--------|----------------|--------------------------|
| POST   | /auth/register | Register a new user      |
| POST   | /auth/login    | Login and get mock token |

**POST /auth/register** — Request body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

Response `201`:
```json
{
  "_id": "664abc...",
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

**POST /auth/login** — Request body:
```json
{
  "username": "admin",
  "password": "1234"
}
```

Response `200`:
```json
{
  "token": "prodesk-mock-demo-jwt-token-12345"
}
```

---

### Posts — `/api`

| Method | Route                  | Description                   |
|--------|------------------------|-------------------------------|
| GET    | /api/posts/top-recent  | Get 3 most recent posts       |
| GET    | /api/posts             | Get all posts                 |
| GET    | /api/posts/:id         | Get a single post by ID       |
| POST   | /api/posts             | Create a new post             |
| PUT    | /api/posts/:id         | Update a post by ID           |
| DELETE | /api/posts/:id         | Delete a post by ID           |

**POST /api/posts** — Request body:
```json
{
  "title": "Morning Walk",
  "content": "Went for a walk today.",
  "authorId": "664abc..."
}
```

Response `201`:
```json
{
  "message": "Post created",
  "data": {
    "_id": "664xyz...",
    "title": "Morning Walk",
    "content": "Went for a walk today.",
    "authorId": "664abc...",
    "createdAt": "2026-06-05T10:00:00.000Z"
  }
}
```

**PUT /api/posts/:id** — Request body (any fields to update):
```json
{
  "title": "Updated Title"
}
```

**DELETE /api/posts/:id** — Response `200`:
```json
{
  "message": "Post deleted"
}
```

---

## Data Models

**User**

| Field | Type   | Required | Unique |
|-------|--------|----------|--------|
| name  | String | Yes      | No     |
| email | String | Yes      | Yes    |

**Post**

| Field    | Type     | Required | Notes                   |
|----------|----------|----------|-------------------------|
| title    | String   | Yes      |                         |
| content  | String   | Yes      |                         |
| authorId | ObjectId | No       | Ref to User, nullable   |

---

## Middleware

Every incoming request is logged to the console:

```
[GET] /api/posts - 10:05:32 AM
```

---

## Deployment

This project is deployed on Render.
