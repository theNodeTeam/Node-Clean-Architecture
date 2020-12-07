/*
    name: productImages SCHEMA
    path: models/productImages/productImages-schema.js
    Objective: In this we validate each field of productImages schema.
    next File: productImages-schema > index
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  productID: Joi.number().required().error(() => 'must have productID  as number'),
  productImageURL: Joi.string().error(() => 'productImageURL must be a string')
})
