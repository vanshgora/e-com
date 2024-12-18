const productModel = require("../models/produtSchema");


const addProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const vendor = req.vendor._id;
    const product = new productModel({
      name,
      price,
      stock,
      vendor
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const vendor = req.vendor;
    const products = await productModel.find({vendor: vendor._id })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalProducts = await productModel.countDocuments();
    res.status(200).json({ products, total: totalProducts });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock } = req.body;

    const updatedProduct = await productModel.findByIdAndUpdate(id, { name, price, stock }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {

    const { id } = req.params;

    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addProduct, getProducts, updateProduct, deleteProduct };