let Joi = require('joi')

module.exports = Joi.object().keys({
  orderID: Joi.string().required().error(() => 'must have orderID name as string'),
  itemID: Joi.string().error(() => 'itemID must be a string'),
  itemQuantity: Joi.string().error(() => 'itemQuantity must be a string'),
})
