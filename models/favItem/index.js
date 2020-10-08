let buildMakeFavItem = require('./favItem')
let favSchema = require('./favItem-schema')
let favValidator = require('../validator')(favSchema)

let makeFavItem = buildMakeFavItem(favValidator)

module.exports = makeFavItem

   