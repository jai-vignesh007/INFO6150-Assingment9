# Job Portal Web Application

This is a full-stack job portal web application built using **Node.js**, **Express**, **MongoDB**, and **React** with **Material UI** components. It includes user authentication, image uploading, job listing management, and a dynamic company showcase.

---

## 🚀 Project Setup

### 📦 Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   nodemon server.js
   ```
   Server will run on: `http://localhost:3000`

> Ensure MongoDB is running locally (default port `27017`) and `express-fileupload` is installed.

### 🌐 Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend/job-portal
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
   App will be available at: `http://localhost:3001` or as per your terminal output.

---

## 📁 Folder Structure

### Backend
```
backend/
├── controllers/        # Business logic (user, company)
├── models/             # Mongoose schemas
├── routes/             # API route handlers
├── images/             # Uploaded images (user/company)
├── app.js              # Express config
├── server.js           # Server entry point
```

### Frontend (React)
```
frontend/job-portal/
├── src/
│   ├── assets/images/           # Static local images
│   ├── components/              # Reusable UI components (NavBar, Footer, Cards)
│   ├── data/                    # Static job data
│   ├── pages/                   # Main pages (Login, Home, About, etc.)
│   ├── services/SessionContext  # Global session handling
│   ├── api/axiosInstance.js     # Base Axios config
│   ├── App.js, index.js         # Entry and routing
```

---

## 🧭 Navigation & Routing

The frontend uses **React Router** for SPA-like navigation.

| Route               | Component         | Access  |
|--------------------|-------------------|---------|
| `/`                | Login             | Public  |
| `/home`            | Home              | Private |
| `/about`           | About             | Public  |
| `/job-listings`    | Job Listings      | Public  |
| `/contact`         | Contact           | Public  |
| `/company-showcase`| Company Showcase  | Public  |

---

## ✨ Key Functionalities

### ✅ User Authentication
- Login with email/password
- Passwords securely hashed using **bcrypt**
- Session context manages logged-in state

### 📸 Image Upload (User & Company)
- Upload one profile image per user (validated by type)
- Upload company image with name
- Images stored in `/images/` and referenced in MongoDB

### 🏢 Company Showcase
- Dynamically displays uploaded companies and images
- Data fetched from `/companies` API
- Uses Material UI `Card` and `Grid` components

### 📄 Job Listings (Frontend Only)
- Jobs loaded from static `jobPosts.js`
- Each job includes title, skills, and salary
- Rendered with `map()` function

### 🌍 Contact/About/Home Pages
- Built with Material UI layout and reusable components

---

## 📘 API Endpoints

### User APIs
```
POST /user/create            # Register new user
POST /login                  # Login
PUT /user/edit               # Update user info
DELETE /user/delete          # Delete user
GET /user/getAll             # Fetch all users
POST /user/uploadImage       # Upload user profile image
```

### Company APIs
```
POST /companies/upload       # Upload company image + name
GET /companies               # Get all companies
```

---

## ✅ Testing
- All APIs tested via **Postman**
- Swagger UI available at `/api-docs` for backend documentation

---

## 📌 Notes
- Backend uses `express-fileupload` (no custom multer middleware)
- Company Showcase images now come from backend (not hardcoded)
- Designed to evolve into user-specific company display in future assignments

---

## 👨‍💻 Developed For
**INFO 6150 - Web Design & User Experience Engineering**  
**Assignment 8 & 9 Integration**

> Let me know if you want to deploy this to Netlify + Render or need a MongoDB Atlas setup!