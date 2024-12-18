const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const Vendor = require('../models/vendorSchema');
const { registerVendor, loginVendor } = require('../controllers/vendorController');

const router = express.Router();

// Register Route
router.post('/register', registerVendor);
router.post('/login', loginVendor);

module.exports = router;
