/*
    name: ITEM SCHEMA
    path: models/item/item-schema.js
    Objective: In this we validate each field of item schema.
    next File: nutrition-schema > index
*/

let Joi = require('joi');

module.exports = Joi.object().keys({
  productID: Joi.number()
    .required()
    .error(() => 'productID must be a number'),
  storeID: Joi.number().error(() => 'storeID must be a number'),
  productPrice: Joi.number().error(() => 'productPrice must be a number'),
  productDiscount: Joi.number().error(() => 'productDiscount must be a number'),
  productDiscountedPrice: Joi.number().error(
    () => 'productDiscountedPrice must be a number',
  ),
  isFeatured: Joi.number().allow("").optional().error(() => 'isFeatured must be a number'),
  isOutOfStock: Joi.number().allow("").optional().error(() => 'isOutOfStock must be a number'),
  outOfStockDate: Joi.string().allow('').optional().error(() => 'outOfStockDate must be a string'),
  expDate: Joi.string().allow('').optional().error(() => 'expDate must be a string'),
  featuredDetails: Joi.string().error(() => 'featuredDetails must be a string'),
  speciaIInstructions: Joi.string().error(() => 'speciaI Instructions must be a string'),
  quantity: Joi.number().allow(0).optional().error(() => 'quantity must be a number'),
  itemBarcode: Joi.number().allow(0).optional().error(() => 'itemBarcode must be a number'),
  noOfImage: Joi.number().error(() => 'noOfImage must be a number'),
  disclaimer: Joi.string().allow('').optional().error(() => 'disclaimer must be a string'),
  nutritionID: Joi.number().error(() => 'nutritionID must be a number'),
  itemActive: Joi.number().error(() => 'itemActive must be a number'),
});
