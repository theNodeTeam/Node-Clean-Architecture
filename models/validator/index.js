/*
    name: VALIDATOR
    path: models/validator/index.js
    Objective: this function get the whole schema and pass it to the validator (JOI)
*/

let Joi = require('joi')

let validator = (schema) =>
  (payload) => {
    let {error} = Joi.validate(payload, schema, {abortEarly: false})
    if (error) {
      let message = error.details.map(el => el.message).join('\n')
      return {
        error: message
      }
    }
    return true
  }

module.exports = validator