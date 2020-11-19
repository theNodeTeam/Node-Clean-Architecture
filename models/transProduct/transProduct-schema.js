/*
    name: TRANS_PRODUCT SCHEMA
    path: models/transProduct/transProduct-schema.js
    Objective: In this we validate each field of transProduct schema.
    next File: transProduct-schema > index
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  orderNumber: Joi.string().required().error(() => 'must have orderNumber name as string'),
  itemID: Joi.string().error(() => 'itemID must be a string'),
  itemQuantity: Joi.string().error(() => 'itemQuantity must be a string'),
  salePrice: Joi.number().error(() => 'salePrice must be a number'),
  saleDiscount: Joi.number().error(() => 'saleDiscount must be a number'),
})
