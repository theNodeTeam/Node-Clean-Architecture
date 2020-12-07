/*
    name: PRODUCT MAKER
    path: models/product/index.js
    Objective: In this file  we validate schema and return the validated data.
    next File: index > product
*/

let buildMakeProduct = require('./product') // in this file we make the getters for the validated fields
let productSchema = require('./product-schema') // importing the schema
let productValidator = require('../validator')(productSchema) // importing validator

let makeProduct = buildMakeProduct(productValidator) // validating the schema

module.exports = makeProduct

   