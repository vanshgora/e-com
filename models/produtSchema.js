const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    vendor: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'vendor'
    }
},
{
    timestamps: true
}
);

productSchema.index({ vendor: 1 });
productSchema.index({ name: 1 });

const productModel = mongoose.models.product || mongoose.model('product', productSchema);
module.exports = productModel;