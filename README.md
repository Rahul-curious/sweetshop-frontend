🧁 Sweet Shop Management System – Frontend
📌 Overview

The frontend of the Sweet Shop Management System is a modern, responsive Single Page Application (SPA) that allows users to:

Register and log in

View available sweets

Search and filter sweets

Purchase sweets

Perform admin operations (add, update, delete sweets)

The application communicates with a secure REST API backend.

🛠 Tech Stack

React (Vite)

Tailwind CSS

Axios

JWT-based authentication

Vercel (Deployment)

🌍 Live Application

Frontend URL:
👉 https://sweetshop-frontend-khaki.vercel.app

Backend API:
👉 https://sweetshop-backend-1cpk.onrender.com

⚙️ Environment Variables

The frontend uses the following environment variable:

VITE_API_BASE_URL=https://sweetshop-backend-1cpk.onrender.com


This variable is configured securely in Vercel Environment Settings and is not committed to Git.

✨ Features
User Features

User registration & login

JWT-based authentication

View list of sweets

Search sweets by name, category, or price

Purchase sweets (disabled when out of stock)

Admin Features

Add new sweets

Update sweet details

Delete sweets

Restock inventory

🧪 Testing

Frontend functionality was manually tested against the live backend API.

Future improvements may include:

Component-level testing (React Testing Library)

E2E tests (Playwright / Cypress)



🚀 Local Setup
1️⃣ Clone Repository
git clone https://github.com/<your-username>/sweetshop-frontend.git
cd sweetshop-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


App runs on:

http://localhost:5173

🤖 My AI Usage
AI Tools Used

ChatGPT (OpenAI)

How I Used AI



Debugged API integration issues

Improved UI/UX text and layout

Reflection

AI improved development efficiency and reduced boilerplate time.
All application logic, API integration, and design decisions were reviewed and implemented manually.

AI was used as a development assistant, not a replacement for understanding.
