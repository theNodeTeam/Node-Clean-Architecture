let buildMakeTransProduct = require('./transProduct')
let transProdSchema = require('./transProduct-schema')
let transProdValidator = require('../validator')(transProdSchema)

let makeTransProd = buildMakeTransProduct(transProdValidator)

module.exports = makeTransProd

   