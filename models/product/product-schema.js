/*
    name: PRODUCT SCHEMA
    path: models/product/product-schema.js
    Objective: In this we validate each field of product schema.
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  productName: Joi.string().required().error(() => 'must have product name as string'),
  productDescription: Joi.string().error(() => 'product description must be a string'),
  productType: Joi.number().error(() => 'product type must be a number'),
  productBarcode: Joi.number().error(() => 'product barcode must be a number') 
})
