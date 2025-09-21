# PayPal Clone App (Simulation)

This project is a PayPal-style progressive web app (PWA) and website.  
The app is mobile-first, with the same design and features across both web and app.  

## Features

### 1. Language Selection
- User chooses their preferred language before signup/login.
- PayPal logo is shown boldly on the page.

### 2. Get Started Page
- Clean landing page with "Get Started" at the center.
- Login and Signup buttons shown at the top-right corner.

### 3. Authentication
- Signup & login with OTP (One-Time Password).
- OTP has:
  - Autofill option (checkbox ☑️ → numbers auto-fill instantly).
  - Super-fast transition after OTP confirm.
- For login, OTP costs money 💰 (deducted from balance).  
  - Price is set by the admin (can be updated anytime).

### 4. Dashboard
- Shows hidden balance (👁️ eye icon to reveal).
- Transaction history.
- Insufficient funds message if balance is too low.

### 5. Chat System
- Floating chatbox 🗨️ appears on every page **except**:  
  - Get Started  
  - Language selection  
  - Login  
  - Signup  
- Free chat is limited to **15 total messages** (both sides).  
- After limit is reached, user sees premium options.

### 6. Premium Features
- After free messages, app shows:
  - Premium subscription
  - Voice call
  - Human escalation
  - Urgency support
- Prices are displayed in **₦ (Naira)** or **$ (USD)** depending on admin settings.
- Admin can update prices anytime.

### 7. Admin Dashboard
- Separate admin account with full control.
- Can:
  - Add new features.
  - Update premium prices.
  - Change OTP costs.
  - Manage all users, transactions, and accounts.

---

## Tech Setup
- **Supabase** → Handles authentication, database, and tables.  
- **Vercel** → Hosting platform for deployment.  
- **GitHub** → Source code management.  

---

## Notes
- This is a **simulation project** for educational purposes.  
- PWA and Website are identical in design and functionality.
