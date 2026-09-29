# 📚 CALDIM Engineering Project Documentation

Welcome to the central documentation repository for the **CALDIM Engineering Website & Portal**.

---

## 🧭 Documentation Sitemap

| Document | Description |
|---|---|
| 📐 **[ARCHITECTURE.md](./ARCHITECTURE.md)** | High-level system architecture, technology stack breakdown, component diagrams, and data flow. |
| 🔌 **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** | Complete REST API endpoint reference, request/response JSON payloads, status codes, and curl examples. |
| 🎨 **[FRONTEND_GUIDE.md](./FRONTEND_GUIDE.md)** | React component structure, Vite configuration, Framer Motion & GSAP animations guide, and styling system. |
| 🗄️ **[DATABASE_AND_ENV.md](./DATABASE_AND_ENV.md)** | MySQL database schema, dynamic migrations, Nodemailer configuration, and environment variables (.env). |
| 🚀 **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** | Full deployment guide for both VPS (Ubuntu + Nginx + PM2 + SSL) and cPanel hosting environments. |

---

## 🛠️ Quick System Overview

- **Frontend**: React 18, Vite 5, Tailwind CSS 3, Framer Motion, GSAP, Lucide React, React Router 7.
- **Backend**: Node.js, Express 5, MySQL2, Nodemailer, CORS, Dotenv.
- **Database**: MySQL (`caldim_db` database, `enquiries` table).
- **Security & Features**: Lead Capture OTP verification, SMTP Email Notifications, MySQL Auto-Migrations, CORS whitelist protection, JSON body error handlers.
