const orderModel = require("../models/vendorSchema");

const getOrders = async (req, res) => {
  try {
    const vendorId = req.vendor._id; 
    
    const orders = await orderModel.find({ vendor: vendorId }).populate('product');
    res.status(200).json({ orders });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

const markOrderAsShipped = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderModel.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = 'shipped'; 
    await order.save();

    res.status(200).json({ message: 'Order marked as shipped', order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getOrders, markOrderAsShipped };