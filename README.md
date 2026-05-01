# 🚗 Auto Cimi - Modern E-commerce Platform for Spare Parts

A professional, full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js) specifically designed for managing and selling vehicle spare parts. Optimized for French and Hyundai car parts, featuring a sleek UI and high-performance architecture.

![Auto Cimi Banner](https://images.unsplash.com/photo-1486006396113-ad7302ff172c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Key Features

### 🌐 Frontend (Customer Facing)
- **Premium UI/UX**: Minimalist "Cold" aesthetic built with React and modern CSS.
- **Advanced Filtering**: Detailed search system based on Brand, Model, and Year.
- **Coming Soon Section**: Dedicated space for upcoming vehicle arrivals.
- **New Arrivals**: Dynamic showcase of the latest inventory additions.
- **Online Reservations**: Direct booking for parts or services through the platform.
- **Fully Responsive**: Optimized experience across all devices (Mobile, Tablet, Desktop).

### 🔐 Admin Dashboard
- **Inventory Management**: Full CRUD operations for spare parts and stock.
- **Order Tracking**: Real-time monitoring and management of customer orders.
- **Automated Notifications**: Instant email alerts for new orders via Nodemailer.
- **Secure Authentication**: JWT-protected routes for administrative access.

### 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Framer Motion (Animations)
- Axios (API Integration)
- Context API (State Management)
- Vanilla CSS (Modern CSS Variables)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Nodemailer (Email Integration)
- Multer (Image Handling)

## 🚀 Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB (Local or Atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/auto-cimi.git
cd auto-cimi
```

### 2. Backend Configuration
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5005
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@domain.com
EMAIL_PASS=your_app_specific_password
```
Seed the database with initial data (optional):
```bash
node seedParts.js
```
Start the server:
```bash
npm start
```

### 3. Frontend Configuration
```bash
cd ../frontend
npm install
npm run dev
```

The platform will be available at `http://localhost:5173`.

## 📁 Project Structure

```text
auto-cimi/
├── backend/                # Express & Node.js API
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # API Endpoints
│   ├── middleware/         # Auth & Validation
│   ├── uploads/            # Product Images
│   └── server.js           # Server Entry Point
├── frontend/               # React Application
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── context/        # State Management
│   │   ├── pages/          # Main Views
│   │   └── App.jsx         # Routing & Layout
│   └── package.json
└── README.md
```

## 📜 License
This project is licensed under the MIT License.

---
Built with passion for **Auto Cimi**.
