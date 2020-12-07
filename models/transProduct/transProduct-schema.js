/*
    name: TRANS_PRODUCT SCHEMA
    path: models/transProduct/transProduct-schema.js
    Objective: In this we validate each field of transProduct schema.
    next File: transProduct-schema > index
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  orderNumber: Joi.string().required().error(() => 'must have orderNumber name as string'),
  itemID: Joi.number().error(() => 'itemID must be a number'),
  itemQuantity: Joi.number().error(() => 'itemQuantity must be a number'),
  salePrice: Joi.number().error(() => 'salePrice must be a number'),
  saleDiscount: Joi.number().error(() => 'saleDiscount must be a number'),
})
