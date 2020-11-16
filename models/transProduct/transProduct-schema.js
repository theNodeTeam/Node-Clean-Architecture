/*
    name: TRANS_PRODUCT SCHEMA
    path: models/transProduct/transProduct-schema.js
    Objective: In this we validate each field of transProduct schema.
    next File: transProduct-schema > index
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  orderID: Joi.string().required().error(() => 'must have orderID name as string'),
  itemID: Joi.string().error(() => 'itemID must be a string'),
  itemQuantity: Joi.string().error(() => 'itemQuantity must be a string'),
  salePrice: Joi.string().error(() => 'salePrice must be a string'),
  saleDiscount: Joi.string().error(() => 'saleDiscount must be a string'),
})
