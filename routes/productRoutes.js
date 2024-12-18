const express = require('express');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const authenticateVendor = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/addproduct', authenticateVendor, addProduct);
router.get('/getproducts', authenticateVendor, getProducts);
router.put('/updateproduct/:id', authenticateVendor, updateProduct);
router.delete('/deleteproduct/:id', authenticateVendor, deleteProduct);

module.exports = router;
