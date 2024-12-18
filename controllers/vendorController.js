const bcrypt = require('bcryptjs');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const vendorModel = require('../models/vendorSchema');

const vendorValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const registerVendor = async (req, res) => {
    const { error } = vendorValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, password } = req.body;

    try {
        const existingVendor = await vendorModel.findOne({ email });
        if (existingVendor) {
            return res.status(400).json({ message: 'Vendor with this email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newVendor = new vendorModel({
            name,
            email,
            password: hashedPassword,
        });

        await newVendor.save();

        const token = jwt.sign({ id: newVendor._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: 'Vendor registered successfully',
            token,
            vendor: { id: newVendor._id, name: newVendor.name, email: newVendor.email },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const loginVendor = async (req, res) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        const { email, password } = req.body;

        const vendor = await vendorModel.findOne({ email });
        if (!vendor) {
            return res.status(404).json({ message: 'Vendor not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, vendor.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign(
            { id: vendor._id, email: vendor.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { registerVendor, loginVendor };
