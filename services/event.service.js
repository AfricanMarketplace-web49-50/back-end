const db = require('../db/index')

module.exports = {
    async getProducts() {
        // eslint-disable-next-line no-useless-catch
        try {
            let products = await db.Products.findAll()
            return products
        } catch (e) {
            throw e
        }
    },

    async createProduct(product) {
        // eslint-disable-next-line no-useless-catch
        try {
            let newProduct = await db.Products.create(product)
            return newProduct
        } catch (e) {
            throw e
        }
    },

    async updateEvent(id, product) {
        // eslint-disable-next-line no-useless-catch
        try {
            let updateProduct = await db.Products.update(product, {
                where: {
                    id: id
                }
            })
            return updateProduct
        } catch (e) {
            throw e
        }
    },

    async deleteEvent(id) {
        try {
            let deleteProduct = await db.Products.destroy({
                where: {
                    id: id
                }
            })
            if (deleteProduct) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log(e)
            throw e
        }
    }
}