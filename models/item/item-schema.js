/*
    name: ITEM SCHEMA
    path: models/item/item-schema.js
    Objective: In this we validate each field of item schema.
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  productID: Joi.string().required().error(() => 'productID must be a string'),
  storeID: Joi.string().error(() => 'storeID must be a string'),
  productPrice: Joi.number().error(() => 'productPrice must be a number'),
  productDiscount: Joi.number().error(() => 'productDiscount must be a number'),
  isFeatured: Joi.boolean().error(() => 'isFeatured must be a boolean'),
  isOutOfStock: Joi.boolean().error(() => 'isOutOfStock must be a boolean'),
  outOfStockDate: Joi.string().error(() => 'outOfStockDate must be a string'),
  expDate: Joi.string().error(() => 'expDate must be a string'),
  featuredDetails: Joi.string().error(() => 'featuredDetails must be a string'),  
  speciaIInstructions: Joi.string().error(() => 'speciaI Instructions must be a string'),
  discount: Joi.string().error(() => 'discount must be a string'),
  quantity: Joi.string().error(() => 'quantity must be a string'),
  itemBarcode: Joi.number().error(() => 'itemBarcode must be a number'),
  noOfImage: Joi.number().error(() => 'noOfImage must be a number'),
  disclaimer: Joi.string().error(() => 'disclaimer must be a string'),
  nutritionFacts: Joi.string().error(() => 'nutritionFacts must be a string'),
  itemActive: Joi.boolean().error(() => 'itemActive must be a boolean')
})
