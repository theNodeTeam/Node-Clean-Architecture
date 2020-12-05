/*
    name: productImages MAKER
    path: models/productImages/index.js
    Objective: In this we validate schema and return the validated data.
    next File: index > productImages
*/
let buildMakeProductImages = require('./productImages')  // in this file we make the getters for the validated fields
let productImagesSchema = require('./productImages-schema') // importing the schema
let productImagesValidator = require('../validator')(productImagesSchema) // importing validator

let makeProductImages = buildMakeProductImages(productImagesValidator) // validating the schema

module.exports = makeProductImages

   