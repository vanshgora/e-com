# API Testing with cURL

This document contains cURL commands for testing the API endpoints of the E-Commerce application. Use these commands to validate the functionality of each endpoint.

---

## **Vendor Registration**
```bash
curl -X POST https://your-api-url/api/vendor/register \
-H "Content-Type: application/json" \
-d '{
    "name": "Vendor Name",
    "email": "vendor@example.com",
    "password": "password123"
}'
```

---

## **Vendor Login**
```bash
curl -X POST https://your-api-url/api/vendor/login \
-H "Content-Type: application/json" \
-d '{
    "email": "vendor@example.com",
    "password": "password123"
}'
```

---

## **Fetch All Products**
```bash
curl -X GET https://your-api-url/api/products \
-H "Authorization: Bearer <your-token>"
```

---

## **Add a New Product**
```bash
curl -X POST https://your-api-url/api/products \
-H "Authorization: Bearer <your-token>" \
-H "Content-Type: application/json" \
-d '{
    "name": "Product Name",
    "price": 100,
    "description": "Product description",
    "quantity": 10
}'
```

---

## **Fetch All Orders**
```bash
curl -X GET https://your-api-url/api/orders \
-H "Authorization: Bearer <your-token>"
```

---

## **Place an Order**
```bash
curl -X POST https://your-api-url/api/orders \
-H "Authorization: Bearer <your-token>" \
-H "Content-Type: application/json" \
-d '{
    "productId": "product-id",
    "quantity": 2
}'
```

---

## **Notes:**
1. Replace `https://your-api-url` with the base URL of your API.
2. Replace `<your-token>` with a valid token obtained after logging in.
3. Replace `product-id` with the ID of the product you want to order.
4. Ensure your API server is running before executing these commands.

---

These commands provide a quick and efficient way to test the functionality of your API endpoints.
