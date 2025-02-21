# Multi-Tenant E-Commerce API

This project is a backend API for a multi-tenant e-commerce system built with **Node.js**, **Express.js**, and **MongoDB**. It allows vendors to register, manage products, and handle orders. The API implements robust authentication, and data validation mechanisms to ensure secure and efficient operations.

---

## Features

### 1. **Vendor Management**
- Vendors can register and log in.
- JWT-based authentication.
- Vendors can manage only their own products and orders.

### 2. **Product Management**
- Vendors can add, update, delete, and list their products.
- Pagination is implemented for listing products.

### 3. **Order Management**
- Vendors can view orders placed for their products.
- Vendors can mark an order as shipped.

### 4. **Security Features**
- All routes are protected with JWT authentication.
- Vendors can only access their own data.

### 5. **Additional Features**
- Data validation using **Joi**.
- Optimized queries using MongoDB indexes.
- Error handling with appropriate HTTP status codes.

---

## Technology Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **Joi**: Data validation
- **JWT**: Authentication
- **Render**: Deployment platform

---

## API Endpoints

### **Authentication**

| Method | Endpoint                | Description            |
|--------|-------------------------|------------------------|
| POST   | `/api/vendors/register` | Vendor registration    |
| POST   | `/api/vendors/login`    | Vendor login           |

### **Product Management**

| Method | Endpoint              | Description                     |
|--------|-----------------------|---------------------------------|
| POST   | `/api/products`       | Add a new product              |
| GET    | `/api/products`       | List all products (paginated)  |
| PUT    | `/api/products/:id`   | Update product details         |
| DELETE | `/api/products/:id`   | Delete a product               |

### **Order Management**

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/orders`         | List all orders for vendor   |
| PUT    | `/api/orders/:id`     | Mark an order as shipped     |

---

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the server:**
   ```bash
   npm start
   ```

5. **Access the API:**
   The server will run on `http://localhost:3000` by default.

---

## Deployment

The API is deployed on Render. Access it at: [Deployed API URL](https://e-com-bnev.onrender.com/)

---

## Testing

1. **Run Tests:**
   ```bash
   npm test
   ```

2. **Test with Postman:**
   Import the provided Postman collection for testing all endpoints.

---

---

## Project Structure

```plaintext
.
├── controllers        # Route handlers
├── models             # Mongoose schemas
├── routes             # API route definitions
├── middleware         # Custom middleware (auth, etc.)
├── tests              # Test cases
├── .env               # Environment variables
├── .gitignore         # Ignored files and directories
├── package.json       # Node.js dependencies
└── README.md          # Documentation
```

---

## Future Enhancements

1. Add support for customer accounts.
2. Implement advanced search and filtering for products.
3. Enable order tracking for customers.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
