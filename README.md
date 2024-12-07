# 📦 Inventory Management App

A secure and user-friendly Inventory Management App built using **Express.js** and **EJS**. This application follows the MVC architecture and provides full CRUD operations with authentication and validation features.

---

## 🚀 Features

- **Secure Access**:
  - Users must register and log in to access the products page.
  - Session management using `express-session` and cookies for user authentication.
- **CRUD Operations**:

  - Create a new product by providing a name, price, description, and image (using `multer` for image upload).
  - Update or delete existing products.
  - Products are stored in memory (local arrays).

- **Validation**:

  - All input fields are validated using `express-validator`.
  - Ensures every product has a name, price, description, and image.

- **Last Visit Timestamp**:

  - The application records and displays the user's last visit timestamp.

- **Scalable Design**:
  - Follows the **MVC Architecture** for organized and scalable code.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript)
- **Middleware**:
  - `multer` (File upload)
  - `cookie-parser` (Cookie handling)
  - `express-session` (Session management)
  - `express-validator` (Input validation)
  - `express-ejs-layouts` (Layout management)
- **Languages**: JavaScript

---

## 📂 Project Structure

public
------css
------images
------script.js
src
------models
------views
------controllers
------middlewares
index.js(server file)
package.json

---

## 🌟 Features in Detail

### 1. **Authentication**

- Registration and login system ensures secure access.
- Session-based authentication with cookies.

### 2. **Product Management**

- **Create**: Add a new product with validation (name, price, description, image).
- **Read**: View all products in the inventory.
- **Update**: Edit product details.
- **Delete**: Remove products from the inventory.

### 3. **Validation**

- Ensures that all fields (name, price, description, image) are required.
- Uses `express-validator` for robust input validation.

### 4. **User-Friendly Interface**

- Built using **EJS** for dynamic templating.
- Layout management with `express-ejs-layouts`.

### 5. **Session and Cookies**

- Tracks user sessions and manages authentication.
- Records the last visit timestamp for each user.

---

## ⚙️ Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine.
- A terminal or command-line interface.

### Steps
