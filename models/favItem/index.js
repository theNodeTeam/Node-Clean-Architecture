/*
    name: FAV_ITEM MAKER
    path: models/favitem/index.js
    Objective: In this we validate schema and return the validated data.
    next File: index > favItem
*/

let buildMakeFavItem = require('./favItem') // in this file we make the getters for the validated fields
let favSchema = require('./favItem-schema') // importing the schema
let favValidator = require('../validator')(favSchema) // importing validator

let makeFavItem = buildMakeFavItem(favValidator) // validating the schema

module.exports = makeFavItem

   