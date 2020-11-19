/*
    name: ROUTES
    path: drivers/webserver/routes/index.js
    Objective: In this we declare all our routes
    next File: index > products.js
*/


const express = require('express')
const router = express.Router()

const products = require('./products')

//products
router
  .get('/v1/products', products.index) 
  .get('/v1/products/:id', products.show)  
  .post('/v1/products', products.create)  
  .put("/v1/product/:id", products.editProduct) 
 
//category
router
  .post("/v1/category", products.addCategory)  
  .get("/v1/category", products.getCategories) 
  .get("/v1/category/:id", products.getCategory) 
  .put("/v1/category/:id", products.editCategory) 

//subcategory
router
  .post("/v1/subCategory", products.addSubCategory)  
  .get("/v1/subCategory", products.getSubCategories) 
  .get("/v1/subCategory/:id", products.getSubCategory) 
  .put("/v1/subCategory/:id", products.editSubCategory) 

//item
router
  .get("/v1/item", products.getItems) 
  .post("/v1/item", products.addItem)  
  .put("/v1/item/:id", products.editItem)  
  .get("/v1/item/:id", products.getItem) 
  .delete("/v1/item/:id", products.deleteItem) 
  .get("/v1/item/store/:id", products.getStoreItem) 
  .get("/v1/all/item/store/:id", products.getStoreAllItem) 
  .get("/v1/item/featured/:id", products.getFeaturedItem)  

//favourite products
router
  .get("/v1/ref_prod_fav/:id", products.getRef_prod_fav) 
  .post("/v1/ref_prod_fav", products.addRef_prod_fav)  
  .put("/v1/ref_prod_fav/:id", products.editRef_prod_fav) 
  .delete("/v1/ref_prod_fav/:id", products.deleteRef_prod_fav) 
  .get("/v1/user/ref_prod_fav/:id", products.userRef_prod_fav) 
  .get("/v1/store/user/ref_prod_fav/:id/:storeID", products.userStoreRef_prod_fav) 

//order-product
router
  .get("/v1/ref_trans_products/:orderNumber", products.getRef_trans_prod) 
  .post("/v1/ref_trans_products", products.addRef_trans_products)  
  .put("/v1/ref_trans_products/:orderNumber/:itemID", products.editRef_trans_prod) 
  .delete("/v1/ref_trans_products/:orderNumber/:itemID", products.deleteRef_trans_prod) 

//nutritions
  .get("/v1/nutrition/:id", products.get_nutrition)
  .post("/v1/nutrition", products.add_nutrition)
  .put("/v1/nutrition/:id", products.edit_nutrition)
  .delete("/v1/nutrition/:id", products.delete_nutrition)

module.exports = router  
