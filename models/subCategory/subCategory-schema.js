let Joi = require('joi')

module.exports = Joi.object().keys({
  subCategoryName: Joi.string().required().error(() => 'must have subCategory name as string'),
  subCategoryDescription: Joi.string().error(() => 'subCategory description must be a string')
})
