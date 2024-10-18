const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).send(newProduct);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete product by ID
exports.deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).send('Product not found');
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete all products
exports.deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
