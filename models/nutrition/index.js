/*
    name: NUTRITION MAKER
    path: models/nutrition/index.js
    Objective: In this we validate schema and return the validated data.
*/

let buildMakeNutrition = require('./nutrition') // in this file we make the getters for the validated fields
let nutritionSchema = require('./nutrition-schema') // importing the schema
let nutritionValidator = require('../validator')(nutritionSchema) // importing validator

let makeNutrition = buildMakeNutrition(nutritionValidator) // validating the schema

module.exports = makeNutrition