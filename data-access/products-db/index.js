let {
  listproducts,
  findProduct,
  addProduct,
} 
 // switch out db as required
= require('./memory/index')
// = require('./mongod/index')
// = require('./pg/index')

let productsDb = {
  listproducts,
  findProduct,
  addProduct 
}


module.exports = productsDb
