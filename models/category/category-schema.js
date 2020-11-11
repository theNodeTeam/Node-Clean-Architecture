/*
    name: CATEGORY SCHEMA
    path: models/category/category-schema.js
    Objective: In this we validate each field of category schema.
    next File: category-schema > index
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  categoryName: Joi.string().required().error(() => 'must have category name as string'),
  categoryDescription: Joi.string().error(() => 'category description must be a string')
})
