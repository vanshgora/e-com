const jwt = require('jsonwebtoken');
const vendorModel = require('../models/vendorSchema');

const authenticateVendor = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const vendor = await vendorModel.findById(decoded.id);
  
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found.' });
    }

    req.vendor = vendor;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.', error: error.message });
  }
};

module.exports = authenticateVendor;
