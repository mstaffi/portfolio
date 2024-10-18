const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true }
});

// Export the Product model
module.exports = mongoose.model('Product', productSchema);
