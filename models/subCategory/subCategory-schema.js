/*
    name: SUBCATEGORY SCHEMA
    path: models/subcategory/subcategory-schema.js
    Objective: In this we validate each field of subcategory schema.
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  subCategoryName: Joi.string().required().error(() => 'must have subCategory name as string'),
  subCategoryDescription: Joi.string().error(() => 'subCategory description must be a string'),
  categoryID: Joi.number().error(() => 'category id description must be a integer'),
  // productID: Joi.number().error(() => 'product id description must be a integer')
})
