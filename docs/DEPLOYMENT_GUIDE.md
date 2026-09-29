# 🚀 Deployment Guide (VPS & cPanel)

This document provides deployment instructions for both Linux VPS environments and cPanel shared hosting.

---

## Option A: Linux VPS Deployment (Nginx + PM2 + SSL)

### 1. Initial Setup
```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs git nginx ufw certbot python3-certbot-nginx
sudo npm install -g pm2
```

### 2. Backend PM2 Process Manager
```bash
cd /var/www/caldim-engg-website/backend
npm install --production
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

### 3. Frontend Build & Nginx Web Server
```bash
cd /var/www/caldim-engg-website/frontend
npm install
npm run build

sudo cp /var/www/caldim-engg-website/nginx.conf.example /etc/nginx/sites-available/caldimengg
sudo ln -s /etc/nginx/sites-available/caldimengg /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

### 4. SSL Certificate (Certbot)
```bash
sudo certbot --nginx -d caldimengg.in -d www.caldimengg.in
```

---

## Option B: cPanel Hosting Deployment

### 1. Frontend (Static SPA Build)
1. Build locally: Run `npm run build` inside `/frontend`.
2. Zip the contents of `frontend/dist` (`index.html` + `assets/`).
3. Upload and extract into `public_html` via cPanel File Manager.
4. Ensure `.htaccess` includes SPA rewrite rules:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### 2. Backend (cPanel Node.js App)
1. Upload backend files (`server.js`, `db.js`, `package.json`, `.env`) to your `api` folder.
2. In cPanel, navigate to **Setup Node.js App** -> **Create Application**.
3. Set **Startup File**: `server.js`.
4. Click **Run NPM Install** and restart the app.
