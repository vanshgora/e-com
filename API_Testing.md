# API Testing and Application Structure

## cURL Commands for Testing API Endpoints

### Authentication

#### Vendor Registration
```bash
curl -X POST https://e-com-bnev.onrender.com/api/vendors/register \
-H "Content-Type: application/json" \
-d '{
    "name": "Vendor A",
    "email": "vendorA@example.com",
    "password": "password123"
}'
```

#### Vendor Login
```bash
curl -X POST https://e-com-bnev.onrender.com/api/vendors/login \
-H "Content-Type: application/json" \
-d '{
    "email": "vendorA@example.com",
    "password": "password123"
}'
```

### Product Management

#### Add a Product
```bash
curl -X POST https://e-com-bnev.onrender.com/api/products \
-H "Authorization: Bearer <your-token-here>" \
-H "Content-Type: application/json" \
-d '{
    "name": "Product 1",
    "price": 100,
    "stock": 50
}'
```

#### List Products with Pagination
```bash
curl -X GET "https://e-com-bnev.onrender.com/api/products?page=1&limit=10" \
-H "Authorization: Bearer <your-token-here>"
```

#### Update a Product
```bash
curl -X PUT https://e-com-bnev.onrender.com/api/products/<product-id> \
-H "Authorization: Bearer <your-token-here>" \
-H "Content-Type: application/json" \
-d '{
    "price": 120
}'
```

#### Delete a Product
```bash
curl -X DELETE https://e-com-bnev.onrender.com/api/products/<product-id> \
-H "Authorization: Bearer <your-token-here>"
```

### Order Management

#### List Orders
```bash
curl -X GET https://e-com-bnev.onrender.com/api/orders \
-H "Authorization: Bearer <your-token-here>"
```

#### Mark an Order as Shipped
```bash
curl -X PUT https://e-com-bnev.onrender.com/api/orders/<order-id> \
-H "Authorization: Bearer <your-token-here>" \
-H "Content-Type: application/json" \
-d '{
    "status": "shipped"
}'
```

---

## Application Structure

### Project Layout

```
├── controllers
│   ├── vendorController.js    # Handles vendor-related logic
│   ├── productController.js   # Handles product-related logic
│   ├── orderController.js     # Handles order-related logic
│
├── models
│   ├── Vendor.js              # Defines the Vendor schema
│   ├── Product.js             # Defines the Product schema
│   ├── Order.js               # Defines the Order schema
│
├── routes
│   ├── vendorRoutes.js        # Vendor-specific routes
│   ├── productRoutes.js       # Product-specific routes
│   ├── orderRoutes.js         # Order-specific routes
│
├── middlewares
│   ├── authMiddleware.js      # JWT authentication middleware
│   ├── rateLimiter.js         # Rate-limiting middleware
│
├── config
│   ├── db.js                  # Database connection setup
│
├── utils
│   ├── errorHandler.js        # Centralized error handling utility
│
├── index.js                   # Entry point of the application
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file and include the following:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```

4. **Start the Application**
   ```bash
   npm start
   ```

5. **Test the API Endpoints**
   Use the provided cURL commands or import the Postman collection for testing.
