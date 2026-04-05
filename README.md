# 🚀 Task Management System 

This project is a **full-stack Task Management System** developed as part of a software engineering assessment.

It allows users to **register, log in, and manage their personal tasks (CRUD)** with secure authentication and a responsive web interface.

---

## 📌 Objective

To build a complete system where users can:

* Register & log in securely
* Create, view, update, and delete tasks
* Manage their own tasks with filtering and search

---

## 🏗️ Track Selection

✔ **Track A: Full-Stack Engineer**

* Backend API (Node.js + TypeScript)
* Web Frontend (Next.js)

---

## ✨ Features

### 🔐 Authentication (Backend)

* User Registration & Login
* JWT Authentication:

  * Access Token (short-lived)
  * Refresh Token (long-lived)
* Secure password hashing using bcrypt

**Endpoints:**

* POST `/auth/register`
* POST `/auth/login`
* POST `/auth/refresh`
* POST `/auth/logout`

---

### ✅ Task Management (Backend)

* Create, Read, Update, Delete tasks
* Tasks belong to authenticated users only
* Toggle task status

**Advanced Features:**

* Pagination (load tasks in batches)
* Filtering (by status)
* Search (by title)

**Endpoints:**

* GET `/tasks`
* POST `/tasks`
* GET `/tasks/:id`
* PATCH `/tasks/:id`
* DELETE `/tasks/:id`
* PATCH `/tasks/:id/toggle`

---

### 💻 Frontend (Next.js)

* Login & Registration UI
* Task Dashboard
* Add, Edit, Delete, Toggle tasks
* Filtering & Search UI
* Responsive design (mobile + desktop)
* Toast notifications for actions

---

## 🧰 Tech Stack

### Backend

* Node.js
* TypeScript
* Express.js
* Prisma ORM
* SQL Database (PostgreSQL/MySQL)
* JWT Authentication

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS

---

## 🏗️ Project Structure

```bash
task-management-system/
│
├── backend/        # Node.js API
├── frontend/       # Next.js app
├── .gitignore
└── README.md
```











## 🔐 Technical Requirements Covered

✔ TypeScript used throughout
✔ ORM (Prisma) implemented
✔ Proper validation & error handling
✔ Secure authentication (JWT + bcrypt)
✔ Pagination, filtering, search

---


---



---

## 👨‍💻 Author

**Rajesh**
Full-Stack Developer

---

 
