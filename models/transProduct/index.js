/*
    name: TRANS_PRODUCT MAKER
    path: models/transProduct/index.js
    Objective: In this we validate schema and return the validated data.
*/

let buildMakeTransProduct = require('./transProduct') // in this file we make the getters for the validated fields
let transProdSchema = require('./transProduct-schema') // importing the schema
let transProdValidator = require('../validator')(transProdSchema) // importing validator

let makeTransProd = buildMakeTransProduct(transProdValidator) // validating the schema

module.exports = makeTransProd

   