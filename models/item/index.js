
/*
    name: ITEM MAKER
    path: models/item/index.js
    Objective: In this we validate schema and return the validated data.
    next File: index > item
*/

let buildMakeItem = require('./item') // in this file we make the getters for the validated fields
let productSchema = require('./item-schema') // importing the schema
let itemValidator = require('../validator')(productSchema) // importing validator

let makeItem = buildMakeItem(itemValidator) // validating the schema

module.exports = makeItem