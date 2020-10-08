let Joi = require('joi')

module.exports = Joi.object().keys({
  categoryName: Joi.string().required().error(() => 'must have category name as string'),
  categoryDescription: Joi.string().error(() => 'category description must be a string')
})
