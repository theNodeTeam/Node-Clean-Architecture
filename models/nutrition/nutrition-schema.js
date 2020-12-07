/*
    name: NUTRITION SCHEMA
    path: models/nutrition/nutrition-schema.js
    Objective: In this we validate each field of nutrition schema.
    next File: nutrition-schema > index
*/

let Joi = require('joi')

module.exports = Joi.object().keys({
  nutritionID: Joi.string().required().error(() => 'nutritionID must be a string'),
  servingSize: Joi.string().error(() => 'servingSize must be a string'),
  servingPerContainer: Joi.string().error(() => 'servingPerContainer must be a string'),
  calories: Joi.string().error(() => 'calories must be a string'),
  fatInGm: Joi.string().error(() => 'fatInGm must be a string'),
  saturatedFatInGm: Joi.string().error(() => 'saturatedFatInGm must be a string'),
  polyunsaturatedFatInGm: Joi.string().error(() => 'polyunsaturatedFatInGm must be a string'),
  monounsaturatedFatInGm: Joi.string().error(() => 'monounsaturatedFatInGm must be a string'),
  transFatInGm: Joi.string().error(() => 'transFatInGm must be a string'),
  protienInGm: Joi.string().error(() => 'protienInGm must be a string'),
  cholesterol: Joi.string().error(() => 'cholesterol must be a string'),
  sodium: Joi.string().error(() => 'sodium must be a string'),
  potassium: Joi.string().error(() => 'potassium must be a string'),
  totalCarbs: Joi.string().error(() => 'totalCarbs must be a string'),
  dietaryFiber: Joi.string().error(() => 'dietaryFiber must be a string'),
  sugar: Joi.string().error(() => 'sugar must be a string')
})
