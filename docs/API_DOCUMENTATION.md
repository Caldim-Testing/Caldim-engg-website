# 🔌 API Endpoint Documentation

Base URL: `http://localhost:5000` (Local) or `https://caldimengg.in/api` (Production)

---

## 1. System Health Check
Check backend operational status.

- **Endpoint**: `GET /api/health`
- **Authentication**: None
- **Response**: `200 OK`
```json
{
  "status": "ok",
  "timestamp": "2026-08-24T17:00:00.000Z"
}
```

---

## 2. Project Enquiry Submission
Receives contact form submissions, saves the enquiry to MySQL, sends notification emails to the CALDIM team, and sends an automated confirmation email to the client.

- **Endpoint**: `POST /api/contact`
- **Content-Type**: `application/json`
- **Request Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "contactNumber": "+91 9876543210",
  "projectInfo": "Looking for custom industrial automation software."
}
```
- **Success Response**: `200 OK`
```json
{
  "success": true,
  "message": "Email sent successfully."
}
```
- **Error Responses**:
  - `400 Bad Request`: Validation failure (missing fields or invalid email format).
  - `500 Internal Server Error`: Email delivery failure.

---

## 3. Send Verification Code (Lead OTP)
Generates a 6-digit OTP code and emails it to the user to unlock technical demo walkthroughs.

- **Endpoint**: `POST /api/send-otp`
- **Content-Type**: `application/json`
- **Request Body**:
```json
{
  "email": "lead@business.com",
  "firstName": "Alex"
}
```
- **Success Response**: `200 OK`
```json
{
  "success": true,
  "message": "OTP sent to your email."
}
```

---

## 4. Verify OTP Only
Validates the submitted 6-digit OTP against stored memory.

- **Endpoint**: `POST /api/verify-otp-only`
- **Content-Type**: `application/json`
- **Request Body**:
```json
{
  "email": "lead@business.com",
  "otp": "542910"
}
```
- **Success Response**: `200 OK`
```json
{
  "success": true,
  "message": "OTP verified."
}
```

---

## 5. Verify OTP & Capture Lead Details
Validates OTP and dispatches lead notifications to CALDIM team members and demo welcome details to the lead.

- **Endpoint**: `POST /api/verify-otp-and-lead`
- **Content-Type**: `application/json`
- **Request Body**:
```json
{
  "firstName": "Alex",
  "lastName": "Smith",
  "email": "lead@business.com",
  "organization": "TechCorp Solutions",
  "otp": "542910",
  "projectTitle": "AI Procurement System"
}
```
- **Success Response**: `200 OK`
```json
{
  "success": true,
  "message": "Verification successful."
}
```
