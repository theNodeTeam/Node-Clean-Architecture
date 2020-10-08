let Joi = require('joi')

module.exports = Joi.object().keys({
  userID: Joi.string().required().error(() => 'must have userID name as string'),
  itemID: Joi.string().error(() => 'itemID must be a string')
})
