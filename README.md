# 🍬 Sweet Shop Management System – Backend

This repository contains the **backend API** for the Sweet Shop Management System, built using **Node.js, Express, MongoDB**, and **Test-Driven Development (TDD)** principles.

---

## 🎯 Objective

To design a secure, testable, and production-ready REST API that handles:
- User authentication
- Sweet inventory management
- Role-based authorization
- Business logic validation

---

## 🧩 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Jest (Testing)

---

## 🔐 Authentication

- User Registration & Login
- JWT-based authentication
- Protected routes
- Admin-only operations (delete, restock, update)

---

## 📦 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Sweets (Protected)
- `POST /api/sweets` (Admin)
- `GET /api/sweets`
- `GET /api/sweets/search`
- `PUT /api/sweets/:id` (Admin)
- `DELETE /api/sweets/:id` (Admin)

### Inventory
- `POST /api/sweets/:id/purchase`
- `POST /api/sweets/:id/restock` (Admin)

---

## 🧪 Test-Driven Development (TDD)

All major backend logic was developed using **Red → Green → Refactor**:

- Tests written before implementation
- Meaningful test cases for auth & inventory
- Edge cases covered

Run tests using:
```bash
npm test
---

## 🌍 Live Backend (Production)

The backend API is deployed on **Render**.

**Base URL:**
https://sweetshop-backend-1cpk.onrender.com

You can verify the server is running by hitting:


---

## ⚙️ Environment Variables

The backend requires the following environment variables:

```env
MONGO_URI=<MongoDB connection string>
JWT_SECRET=<JWT secret key>
PORT=5000
---

## 🤖 My AI Usage

### AI Tools Used
- ChatGPT (OpenAI)



### Reflection
AI significantly improved development speed and helped unblock issues faster.  
However, all business logic, authorization rules, data modeling, and architectural decisions were implemented and validated manually.

I treated AI as a **pair programmer**, not a replacement for understanding.

