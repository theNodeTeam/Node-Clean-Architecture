let validate = require('validate.js')
let studentSchema = require('./student-schema')
let teacherSchema = require('./teacher-schema')
let productSchema = require('./product-schema')

let validator = (payload, schema) => {
  let result = validate(payload, schema)
  if (result == undefined) {
    return true
  }
  let message = []
  for (var key in result) {
    message.push(result[key][0])
  }
  return {
    error: message
  }
}

module.exports = {
  studentValidator: (payload) => validator(payload, studentSchema),
  teacherValidator: (payload) => validator(payload, teacherSchema),
  productValidator: (payload) => validator(payload, productSchema)
}

