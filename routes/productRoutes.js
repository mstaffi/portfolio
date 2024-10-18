const express = require('express');
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProductById, deleteAllProducts } = require('../controllers/productController');

const router = express.Router();

// Routes for CRUD operations
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProductById);
router.delete('/products', deleteAllProducts);

module.exports = router;

