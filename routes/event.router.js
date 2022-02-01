//index router
const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

/* get products */
router.get('/', productController.getProducts)

/* post new product */
router.post('/', productController.addProduct)

/* update product by id */
router.put('/:id', productController.updateProductById)

/* delete product by id */
router.delete('/:id', productController.deleteProductById)

module.exports = router