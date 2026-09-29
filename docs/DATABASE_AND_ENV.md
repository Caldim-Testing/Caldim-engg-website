# 🗄️ Database Schema & Environment Variables

This document specifies the MySQL database structure, table definitions, automatic schema migrations, and `.env` configuration.

---

## 🗃️ MySQL Database Schema (`enquiries` Table)

The backend server automatically initializes the database schema on launch if it does not already exist.

```sql
CREATE TABLE IF NOT EXISTS enquiries (
    id             INT AUTO_INCREMENT PRIMARY KEY,
    first_name     VARCHAR(255) NOT NULL,
    last_name      VARCHAR(255) NOT NULL,
    email          VARCHAR(255) NOT NULL,
    contact_number VARCHAR(50)  NOT NULL,
    project_info   TEXT         NOT NULL,
    submitted_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### Automatic Migration Logic
If an older version of the `enquiries` table exists with a unified `name` field, the backend automatically executes an `ALTER TABLE` query during boot to add `first_name` and `last_name` columns without breaking existing data.

---

## 🔑 Environment Variables Specification

Create a `.env` file in the `/backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# MySQL Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_secure_db_password
DB_NAME=caldim_db

# Nodemailer / SMTP Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=support@caldimengg.in
EMAIL_PASS=your_smtp_app_password

# Internal Team Notification CC List (Comma-separated)
CC_EMAILS=engineer1@caldimengg.in,engineer2@caldimengg.in
```
