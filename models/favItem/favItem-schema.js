/*
    name: FAV_ITEM SCHEMA
    path: models/favItem/favItem-schema.js
    Objective: In this we validate each field of favItem schema.
    next File: favItem-schema > index
*/
let Joi = require('joi')

module.exports = Joi.object().keys({
  userID: Joi.string().required().error(() => 'must have userID name as string'),
  itemID: Joi.string().error(() => 'itemID must be a string')
})
