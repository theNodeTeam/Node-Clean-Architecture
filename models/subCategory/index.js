/*
    name: SUBCATEGORY MAKER
    path: models/subCategory/index.js
    Objective: In this we validate schema and return the validated data.
    next File: index > subcategory
*/

let buildMakeSubCategory = require('./subCategory') // in this file we make the getters for the validated fields
let subCategorySchema = require('./subCategory-schema') // importing the schema
let subCategoryValidator = require('../validator')(subCategorySchema) // importing validator
 
let makeSubCategory = buildMakeSubCategory(subCategoryValidator) // validating the schema

module.exports = makeSubCategory

   