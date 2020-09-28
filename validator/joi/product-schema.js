let Joi = require('joi')

module.exports = Joi.object().keys({
  productName: Joi.string().required().error(() => 'must have product name as string'),
  productDescription: Joi.string().error(() => 'product description must be a string'),
  productType: Joi.number().error(() => 'product type must be a number'),
  productBarcode: Joi.number().error(() => 'product barcode must be a number') 
})
