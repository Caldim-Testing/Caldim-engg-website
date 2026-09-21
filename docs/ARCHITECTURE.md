# 📐 System Architecture & Technology Stack

This document details the software architecture, component relationships, and data flow of the **CALDIM Engineering** application.

---

## 🏗️ High-Level System Architecture

```
                       +-----------------------------------+
                       |        Client Browser             |
                       |  (React 18 Single Page App)       |
                       +-----------------+-----------------+
                                         |
                                         | HTTPS / REST APIs
                                         v
                       +-----------------+-----------------+
                       |         Express 5 Backend         |
                       |    (Node.js Server Port 5000)     |
                       +--------+-----------------+--------+
                                |                 |
          +---------------------+                 +---------------------+
          | DB Queries                                                  | SMTP / Emails
          v                                                             v
+-------------------+                                         +-------------------+
|  MySQL Database   |                                         |    SMTP Server    |
| (enquiries table) |                                         | (Gmail/Zoho SMTP) |
+-------------------+                                         +-------------------+
```

---

## 💻 Component Breakdown

### 1. Frontend Layer (`/frontend`)
- **Single Page Application (SPA)** built with **React 18** and **Vite 5**.
- **Styling**: Tailwind CSS utility-first styling with custom ice & deep sea color palette (`#002B54`, `#1d4ed8`, `#3b82f6`).
- **Animations**:
  - **GSAP 3**: Timeline-based mechanical core explosion & text reveal animation.
  - **Framer Motion**: Smooth page transitions, floating tech cloud, and interactive modal overlays.
- **Iconography**: Lucide React.
- **Routing**: Client-side routing with `react-router-dom` v7.

### 2. Backend Layer (`/backend`)
- **RESTful API** powered by **Express 5**.
- **Database Connection Pool**: `mysql2/promise` connection pool with automatic table schema creation & column migration.
- **Email Service**: `Nodemailer` integration supporting dual notifications (client confirmation + internal team alerts with CC lists).
- **OTP Verification**: In-memory Map store with 10-minute automatic expiration for lead discovery demo access.
- **Middleware**: CORS whitelist, JSON body parser with syntax error catchers, and timestamped request logging.

---

## 📁 Repository Directory Map

```
Caldim-engg-website/
├── backend/                  # Node.js Express Backend
│   ├── db.js                 # MySQL standalone database helper
│   ├── server.js             # Primary Express API server logic
│   ├── package.json          # Backend dependencies
│   └── ecosystem.config.js   # PM2 configuration for VPS deployment
├── frontend/                 # React Vite Frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components (Header, Footer, Hero, Core)
│   │   ├── pages/            # Page views (Home, About, Projects, Services, Contact)
│   │   ├── data/             # Static project data & catalog
│   │   ├── App.jsx           # Routing configuration
│   │   └── main.jsx          # React entry point
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite build tool config
│   └── tailwind.config.js    # Tailwind CSS styling config
├── docs/                     # Comprehensive System Documentation
├── deploy.sh                 # 1-click VPS deployment script
└── nginx.conf.example        # Nginx reverse proxy configuration template
```
