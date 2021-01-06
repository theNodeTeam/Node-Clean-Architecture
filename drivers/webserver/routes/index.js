/*
    name: ROUTES
    path: drivers/webserver/routes/index.js
    Objective: In this we declare all our routes
    next File: index > products.js
*/


const express = require('express')
const router = express.Router()
var checkAuth = require('../helper/checkAuth')

const products = require('./products')

//products
router
  .get('/v1/products', checkAuth, products.index)
  .get('/v1/products/:id', checkAuth, products.show)
  .post('/v1/products', checkAuth, products.create)
  .put("/v1/product/:id", checkAuth, products.editProduct)

//category
router
  .post("/v1/category", checkAuth, products.addCategory)
  .get("/v1/category", checkAuth, products.getCategories)
  .get("/v1/category/:id", checkAuth, products.getCategory)
  .put("/v1/category/:id", checkAuth, products.editCategory)

//productImages
router
  .post("/v1/productImage", checkAuth, products.addProductImage)
  .get("/v1/productImages", checkAuth, products.getProductImages)
  .get("/v1/productImage/:id", checkAuth, products.getProductImage)
  .put("/v1/productImage/:id", checkAuth, products.editProductImage)
  .get("/v1/productImagesByProductID/:id", checkAuth, products.getProductImagesByProductID)

//subcategory
router
  .post("/v1/subCategory", checkAuth, products.addSubCategory)
  .get("/v1/subCategory", checkAuth, products.getSubCategories)
  .get("/v1/subCategory/:id", checkAuth, products.getSubCategory)
  .put("/v1/subCategory/:id", checkAuth, products.editSubCategory)

//item
router
  .get("/v1/item", checkAuth, products.getItems)
  .post("/v1/item", checkAuth, products.addItem)
  .put("/v1/item/:id", checkAuth, products.editItem)
  .get("/v1/item/:id", checkAuth, products.getItem)
  .get("/v1/item/category/:id", checkAuth, products.getItemCategories)
  .delete("/v1/item/:id", checkAuth, products.deleteItem)
  .get("/v1/item/store/:id", checkAuth, products.getStoreItem)
  .get("/v1/all/item/store/:id", checkAuth, products.getStoreAllItem)
  .get("/v1/item/featured/:id", checkAuth, products.getFeaturedItem)

//favourite products
router
  .get("/v1/ref_prod_fav/:id", checkAuth, products.getRef_prod_fav)
  .post("/v1/ref_prod_fav", checkAuth, products.addRef_prod_fav)
  .put("/v1/ref_prod_fav/:id", checkAuth, products.editRef_prod_fav)
  .delete("/v1/ref_prod_fav/:id", checkAuth, products.deleteRef_prod_fav)
  .get("/v1/user/ref_prod_fav/:id", checkAuth, products.userRef_prod_fav)
  .get("/v1/store/user/ref_prod_fav/:id/:storeID", checkAuth, products.userStoreRef_prod_fav)


  //nutritions
  .get("/v1/nutrition/:id", checkAuth, products.get_nutrition)
  .post("/v1/nutrition", checkAuth, products.add_nutrition)
  .put("/v1/nutrition/:id", checkAuth, products.edit_nutrition)
  .delete("/v1/nutrition/:id", checkAuth, products.delete_nutrition)

module.exports = router  
