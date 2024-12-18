const express = require('express');
const { getOrders, markOrderAsShipped } = require('../controllers/orderController');
const authenticateVendor = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/getorders', authenticateVendor, getOrders);

router.put('/markorderasshipped/:id', authenticateVendor, markOrderAsShipped);

module.exports = router;
