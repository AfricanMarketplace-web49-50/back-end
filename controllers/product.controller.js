const productCreate = require('../validators/productCreate')
const productUpdate = require('../validators/productUpdate')
const productService = require('../services/product.service')

module.exports = {

    /* get All products */
    async getProducts(req, res) {
        try {
            const products = await productService.getProducts()
            res.send(products)
        } catch (e) {
            res.send('Internal server error')
        }
    },

    /* add product */
    async addProduct(req, res) {
        try {
            const {body} = req

            /* validate input */
            const inputIsValid = await productCreate.validate(body)

            if (inputIsValid.error) {
                res.send(inputIsValid.error.details[0].message)
            } else {
                const createdProduct = await productService.createProduct(body)
                res.send(createdProduct)
            }
        } catch (e) {
            res.send('Internal server error')
        }
    },

    async updateProductById(req, res) {
        try {
            const {body} = req
            const {id} = req.params

            /* validate input */
            const inputIsValid = await productUpdate.validate(body)

            if (inputIsValid.error) {
                res.send(inputIsValid.error.message[0].details)
            } else {
                const updateProduct = await productService.updateProduct(id, body)
                res.send(updateProduct)
            }
        } catch (e) {
            res.send('Internal server error')
        }
    },

    async deleteProductById(req, res) {
        try {
            const {id} = req.params
            let deleteProduct = await productService.deleteProduct(id)
            res.send(deleteProduct)
        } catch (e) {
            res.send('Internal server error')
        }
    },
}