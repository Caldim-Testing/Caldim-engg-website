#!/bin/bash

# ==============================================================================
# Caldim Engineering Website - Deployment Script for VPS
# ==============================================================================

set -e # Exit immediately if a command exits with a non-zero status

echo "🚀 [1/4] Pulling latest code from Git..."
git pull origin main

echo "📦 [2/4] Installing backend dependencies & restarting PM2 service..."
cd backend
npm install --production
pm2 reload ecosystem.config.js || pm2 start server.js --name "caldim-backend"

echo "⚡ [3/4] Building Frontend production bundle..."
cd ../frontend
npm install
npm run build

echo "🧹 [4/4] Reloading Nginx server..."
sudo systemctl reload nginx

echo "✅ Deployment completed successfully!"
