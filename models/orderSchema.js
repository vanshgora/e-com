const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

// Add indexes for product and status fields
orderSchema.index({ product: 1 });
orderSchema.index({ status: 1 });

const orderModel = mongoose.model.order || mongoose.model('order', orderSchema);
module.exports = orderModel;