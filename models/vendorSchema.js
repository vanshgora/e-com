const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

vendorSchema.index({ email: 1 });

const vendorModel = mongoose.models.vendor ||  mongoose.model('vendor', vendorSchema);
module.exports = vendorModel;