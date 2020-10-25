let buildMakeNutrition = require('./nutrition')
let nutritionSchema = require('./nutrition-schema')
let nutritionValidator = require('../validator')(nutritionSchema)

let makeNutrition = buildMakeNutrition(nutritionValidator)

module.exports = makeNutrition