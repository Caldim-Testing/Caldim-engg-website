# 🎨 Frontend Architecture & Animation Guide

This document outlines the React frontend structure, styling conventions, component organization, and interactive animation implementation.

---

## 📄 Pages Overview

| Path | File | Purpose |
|---|---|---|
| `/` | `pages/Home.jsx` | Main landing page rendering Hero, Floating Tech Cloud, Mechanical Core, Services, Projects, Values, & Footer. |
| `/about` | `pages/AboutPage.jsx` | Story, Mission, Vision, Leadership Team, Culture, and Engineering Philosophies. |
| `/projects` | `pages/ProjectsPage.jsx` | Featured project catalog with filterable tags, tech specs, and video modals. |
| `/all-projects` | `pages/AllProjectsPage.jsx` | Comprehensive list of all past & ongoing engineering projects. |
| `/services` | `pages/ServicesPage.jsx` | In-depth breakdown of software, embedded, and automation services. |
| `/contact` | `pages/ContactPage.jsx` | Interactive project enquiry form connected to backend Express API. |
| `/portal` | `pages/PortalHome.jsx` | Enterprise client demo portal view. |

---

## 🎬 Specialized Animation Components

### 1. Mechanical Core (`components/MechanicalCore.jsx`)
- **Engine**: GSAP (GreenSock) Timeline & ScrollTrigger.
- **Description**: High-tech interactive core featuring 6 interlocking mechanical segments in deep dark mode.
- **Interactivity**: Clicking the core triggers a 60fps radial expansion explosion, exposing glowing central text ("LETS CREATE THE SOLUTION").

### 2. Floating Tech Cloud (`components/FloatingTechCloud.jsx`)
- **Engine**: Framer Motion.
- **Description**: Interactive tech stack icons (React, Node, Python, MongoDB) floating in 3D orbit.
- **Interactivity**: Draggable icons constrained within screen bounds, smooth magnetic hover physics, and glowing tooltips.

---

## 🛠️ Building for Production

To compile the React SPA for production deployment:

```bash
cd frontend
npm run build
```

This generates static, optimized production bundles in **`frontend/dist/`**.
