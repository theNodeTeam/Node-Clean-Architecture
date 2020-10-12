let {
  listproducts,
  findProduct,
  addProduct,
  editProduct,
  addCategory,
  getCategories,
  getCategory,
  editCategory,
  addSubCategory,
  getSubCategories,
  getSubCategory,
  editSubCategory,
  getItems,
  addItem,
  editItem,
  getItem,
  deleteItem,
  getStoreItem,
  getStoreAllItem,
  getFeaturedItem,
  getRef_prod_fav,
  addRef_prod_fav,
  editRef_prod_fav,
  deleteRef_prod_fav,
  userRef_prod_fav,
  userStoreRef_prod_fav,
  getRef_trans_prod,
  addRef_trans_products,
  editRef_trans_prod,
  deleteRef_trans_prod
} 
 // switch out db as required
// = require('./memory/index')
= require('./mysql/index')
// = require('./mongod/index')
// = require('./pg/index')
 
let productsDb = {
  listproducts,
  findProduct,
  addProduct,
  editProduct,
  addCategory,
  getCategories,
  getCategory,
  editCategory,
  addSubCategory,
  getSubCategories,
  getSubCategory,
  editSubCategory,
  getItems,
  addItem,
  editItem,
  getItem,
  deleteItem,
  getStoreItem,
  getStoreAllItem,
  getFeaturedItem,
  getRef_prod_fav,
  addRef_prod_fav,
  editRef_prod_fav,
  deleteRef_prod_fav,
  userRef_prod_fav,
  userStoreRef_prod_fav,
  getRef_trans_prod,
  addRef_trans_products,
  editRef_trans_prod,
  deleteRef_trans_prod
} 


module.exports = productsDb
