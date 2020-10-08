let buildMakeSubCategory = require('./subCategory')
let subCategorySchema = require('./subCategory-schema')
let subCategoryValidator = require('../validator')(subCategorySchema)

let makeSubCategory = buildMakeSubCategory(subCategoryValidator)

module.exports = makeSubCategory

   