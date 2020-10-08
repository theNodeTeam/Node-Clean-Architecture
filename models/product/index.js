let buildMakeProduct = require('./product')
let productSchema = require('./product-schema')
let productValidator = require('../validator')(productSchema)

let makeProduct = buildMakeProduct(productValidator)

module.exports = makeProduct

   