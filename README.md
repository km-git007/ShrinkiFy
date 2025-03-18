# 🚀 ShrinkFy - Advanced URL Shortener with Analytics

## 📌 Overview

**ShrinkFy** is a powerful and feature-rich **URL shortener** that allows users to create customizable short links with **detailed analytics**. It provides real-time tracking of click counts, user engagement trends, and geographic insights, giving users actionable data about their shared links. The platform also supports **QR code generation**, simplifying link sharing across different platforms.

To ensure **security** and **performance**, ShrinkFy is built with a robust **Spring Boot** backend, utilizing **Spring Security and JWT authentication** for access control and **Redis caching** for lightning-fast response times. It is containerized using **Docker** for seamless deployment and scalability.

## 📌 Table of Contents  

- [Core Features](#✨-core-features)  
- [Key Functionalities](#🔥-key-functionalities)  
- [Tech Stack](#🛠️-tech-stack)  
- [Installation & Setup](#🏗️-installation--setup)  
- [Deployment](#🚀-deployment)  
- [Contributing](#🤝-contributing)  
- [Contact](#📩-contact)

  
## ✨ Core Features

✔ **Custom URL Shortening** – Generate unique and customizable short links with path-based and subdomain-based routing.  
✔ **Real-Time Analytics** – Track click counts, user engagement, and geographic locations of visitors.  
✔ **QR Code Generation** – Automatically generate QR codes for easy link sharing.  
✔ **Secure Authentication** – Spring Security and JWT ensure endpoint protection and access control.  
✔ **Interactive Data Visualization** – Link analytics displayed using **Chart.js** and **React-ChartJS-2**.  
✔ **High-Performance Caching** – Redis caching boosts performance and reduces database load.  
✔ **Containerized Deployment** – Dockerized architecture for easy scalability and cloud deployment.  
✔ **Modern UI** – Built with **React, Material UI (MUI), and Tailwind CSS** for a sleek, responsive experience. 

## 📊 Key Functionalities

### 1️⃣ **URL Shortening with Customization**
- Users can generate short links with custom paths or subdomains.
- Automatic URL validation ensures only valid links are shortened.
- **Expiration time** settings allow links to be temporary.

### 2️⃣ **Real-Time Analytics Dashboard**
- **Click Tracking** – View the number of clicks per shortened link.
- **Geolocation Insights** – Track where users are clicking from.
- **Time-Based Trends** – Analyze user engagement over time.
- **Browser & Device Statistics** – Identify the types of devices used.

### 3️⃣ **Security & Authentication**
- **JWT Authentication** secures API endpoints.
- **Role-Based Access Control (RBAC)** restricts access to certain features.
- **Spring Security** prevents unauthorized access and brute-force attacks.

### 4️⃣ **QR Code Generation**
- Each short link is automatically assigned a **QR code**.
- Users can download and share QR codes for better accessibility.

## 🛠️ Tech Stack

### 🔹 **Frontend (React + Vite)**
- **React 18** – Modern, component-based UI development.
- **React Router 7** – Enables client-side routing for seamless navigation.
- **React Query** – Efficient server-state management for API calls.
- **Material UI (MUI)** – Pre-styled components for a polished UI.
- **Tailwind CSS** – Utility-first styling for responsive design.
- **Axios** – Simplifies HTTP requests and API interactions.
- **React Hook Form** – Handles form validation and state management.
- **React Hot Toast** – Provides beautiful toast notifications.
- **Day.js** – Lightweight library for date/time formatting.
- **React Copy to Clipboard** – Enables easy copying of shortened URLs.
- **React Icons** – Provides scalable vector icons.
- **React Loader Spinner** – Displays loading indicators for a better UX.
- **Chart.js & React-ChartJS-2** – Data visualization for link analytics.
- **Motion** – Handles animations and transitions.

### 🔹 **Backend (Spring Boot + Java)**
- **Spring Boot** – Robust backend framework for microservices architecture.
- **Spring Web** – Provides RESTful API functionality.
- **Spring Security** – Secures APIs and endpoints with authentication mechanisms.
- **JWT (JSON Web Tokens)** – Ensures secure, token-based authentication.
- **Redis** – High-speed in-memory caching for optimized performance.
- **Spring Data JPA** – Simplifies database operations using ORM.
- **Spring Validation** – Handles request validation for input security.
- **Lombok** – Reduces boilerplate code for model classes.
- **MapStruct** – Simplifies object mapping between DTOs and entities.
- **Docker** – Containerized deployment for seamless scalability.

## 🏗️ Installation & Setup

### 🔹 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-username/shrinkfy.git
 cd shrinkfy
```

### 🔹 2️⃣ Backend Setup (Spring Boot)
Ensure you have **Java 17+** and **Maven** installed.
```sh
 cd backend
 mvn clean install
 mvn spring-boot:run
```

### 🔹 3️⃣ Frontend Setup (React)
Ensure you have **Node.js (v18+)** installed.
```sh
 cd frontend
 npm install
 npm run dev
```

### 🔹 4️⃣ Environment Variables
Create a `.env` file in both the **backend** and **frontend** directories with necessary API keys and configurations.

---

## 🚀 Deployment
- **Frontend**: Deployed on **Vercel**
- **Backend**: Deployed on **Render** using Docker

---

## 🤝 Contributing
We welcome contributions! If you’d like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## 📩 Contact
- 🔗 [LinkedIn](https://www.linkedin.com/in/kaustavmishra)
- 📧 Email: mishrakaustav10@gmail.com

