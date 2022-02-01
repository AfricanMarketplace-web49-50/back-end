const Joi = require('joi')

// eslint-disable-next-line no-undef
module.exports = ProductCreateValidator = Joi.object({
    id: Joi.integer().required(),
    product: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.DECIMAL().required(),
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    countrycodelong: Joi.string().required(),
    countrycodeshort: Joi.string().required(),
    countryname: Joi.string().required(),
})