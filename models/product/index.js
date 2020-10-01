let buildMakeProduct = require('./product')
let productSchema = require('./product-schema')
// let {studentValidator} = require('../../validator')
let productValidator = require('../validator')(productSchema)

let makeProduct = buildMakeProduct(productValidator)

module.exports = makeProduct

 