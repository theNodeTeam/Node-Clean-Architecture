/*
    name: NUTRITION SCHEMA
    path: models/nutrition/nutrition-schema.js
    Objective: In this we validate each field of nutrition schema.
    next File: nutrition-schema > index
*/

let Joi = require('joi');

module.exports = Joi.object().keys({
  // nutritionID: Joi.string().required().error(() => 'nutritionID must be a string'),
  servingSize: Joi.string().allow('').optional().error(() => 'servingSize must be a string'),
  servingPerContainer: Joi.string().allow('').optional().error(
    () => 'servingPerContainer must be a string',
  ),
  calories: Joi.string().allow('').optional().error(() => 'calories must be a string'),
  fatInGm: Joi.string().allow('').optional().error(() => 'fatInGm must be a string'),
  saturatedFatInGm: Joi.string().allow('').optional().error(
    () => 'saturatedFatInGm must be a string',
  ),
  polyunsaturatedFatInGm: Joi.string().allow('').optional().error(
    () => 'polyunsaturatedFatInGm must be a string',
  ),
  monounsaturatedFatInGm: Joi.string().allow('').optional().error(
    () => 'monounsaturatedFatInGm must be a string',
  ),
  transFatInGm: Joi.string().allow('').optional().error(() => 'transFatInGm must be a string'),
  protienInGm: Joi.string().allow('').optional().error(() => 'protienInGm must be a string'),
  cholesterol: Joi.string().allow('').optional().error(() => 'cholesterol must be a string'),
  sodium: Joi.string().allow('').optional().error(() => 'sodium must be a string'),
  potassium: Joi.string().allow('').optional().error(() => 'potassium must be a string'),
  totalCarbs: Joi.string().allow('').optional().error(() => 'totalCarbs must be a string'),
  dietaryFiber: Joi.string().allow('').optional().error(() => 'dietaryFiber must be a string'),
  sugar: Joi.string().allow('').optional().error(() => 'sugar must be a string'),
});
