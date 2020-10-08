let buildMakeItem = require('./item')
let productSchema = require('./item-schema')
let itemValidator = require('../validator')(productSchema)

let makeItem = buildMakeItem(itemValidator)

module.exports = makeItem