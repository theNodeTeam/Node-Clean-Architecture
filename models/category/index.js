let buildMakeCategory = require('./category')
let categorySchema = require('./category-schema')
let categoryValidator = require('../validator')(categorySchema)

let makeCategory = buildMakeCategory(categoryValidator)

module.exports = makeCategory

   