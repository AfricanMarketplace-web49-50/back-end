const Joi = require('joi')

// eslint-disable-next-line no-undef
module.exports = ProductUpdateValidator = Joi.object({
    id: Joi.integer(),
    product: Joi.string(),
    description: Joi.string(),
    price: Joi.DECIMAL(),
    category: Joi.string(),
    subcategory: Joi.string(),
    countrycodelong: Joi.string(),
    countrycodeshort: Joi.string(),
    countryname: Joi.string(),
})