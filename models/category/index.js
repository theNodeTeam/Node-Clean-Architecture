/*
    name: CATEGORY MAKER
    path: models/category/index.js
    Objective: In this we validate schema and return the validated data.
*/
let buildMakeCategory = require('./category')  // in this file we make the getters for the validated fields
let categorySchema = require('./category-schema') // importing the schema
let categoryValidator = require('../validator')(categorySchema) // importing validator

let makeCategory = buildMakeCategory(categoryValidator) // validating the schema

module.exports = makeCategory

   