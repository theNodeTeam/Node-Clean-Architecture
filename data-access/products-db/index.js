/*
    name: CONTROLLER
    path: data-access/product-db/index.js
    Objective: In this file we import functions from different databases and export to sub-controller
    next File: index > mysql > index
*/

// here we import all the functions from MYSQL.
let {
  listproducts,
  findProduct,
  addProduct,
  editProduct,
  addCategory,
  getCategories,
  getCategory,
  editCategory,
  addProductImage,
  getProductImages,
  getProductImage,
  getProductImagesByProductID,
  editProductImage,
  addSubCategory,
  getSubCategories,
  getSubCategory,
  editSubCategory,
  getItems,
  addItem,
  editItem,
  getItem,
  getItemCategories,
  deleteItem,
  getStoreItem,
  getStoreAllItem,
  getFeaturedItem,
  userRef_prod_fav,
  userStoreRef_prod_fav,
  getRef_trans_prod,
  addRef_trans_products,
  editRef_trans_prod,
  deleteRef_trans_prod,
  get_nutrition,
  add_nutrition,
  edit_nutrition,
  delete_nutrition
} 
 // switch out db as required
// = require('./memory/index')
= require('./mysql/index')
// = require('./mongod/index')
// = require('./pg/index')

// here we exporting all the functions to sub-controller.
let productsDb = {
  listproducts,
  findProduct,
  addProduct,
  editProduct,
  addCategory,
  getCategories,
  getCategory,
  editCategory,
  addProductImage,
  getProductImages,
  getProductImage,
  getProductImagesByProductID,
  editProductImage,
  addSubCategory,
  getSubCategories,
  getSubCategory,
  editSubCategory,
  getItems,
  addItem,
  editItem,
  getItem,
  getItemCategories,
  deleteItem,
  getStoreItem,
  getStoreAllItem,
  getFeaturedItem,
  userRef_prod_fav,
  userStoreRef_prod_fav,
  getRef_trans_prod,
  addRef_trans_products,
  editRef_trans_prod,
  deleteRef_trans_prod,
  get_nutrition,
  add_nutrition,
  edit_nutrition,
  delete_nutrition,

} 


module.exports = productsDb
