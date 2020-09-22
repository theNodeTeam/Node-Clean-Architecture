let buildMakeStudent = require('./product')
let productSchema = require('./product-schema')
// let {studentValidator} = require('../../validator')
let productValidator = require('../validator')(productSchema)

let makeStudent = buildMakeStudent(productValidator)

module.exports = makeStudent

 