const express = require('express')
const router = express.Router()

const products = require('./products')

//products
router
  .get('/v1/products', products.index) // mysq done
  .get('/v1/products/:id', products.show)  // mysql done
  .post('/v1/products', products.create) // mysql done 
  .put("/v1/product/:id", products.editProduct) // mysql done

//category
router
  .post("/v1/category", products.addCategory) // mysql done 
  .get("/v1/category", products.getCategories) // mysql done
  .get("/v1/category/:id", products.getCategory) // mysql done
  .put("/v1/category/:id", products.editCategory) // mysql done

//subcategory
router
  .post("/v1/subCategory", products.addSubCategory) // mysql done 
  .get("/v1/subCategory", products.getSubCategories) // mysql done
  .get("/v1/subCategory/:id", products.getSubCategory) // mysql done
  .put("/v1/subCategory/:id", products.editSubCategory) // mysql done

//item
router
  .get("/v1/item", products.getItems) // mysql done
  .post("/v1/item", products.addItem) // mysql done (specialInstrauctions is not defined)
  .put("/v1/item/:id", products.editItem) // mysql done (specialInstrauctions is not defined)
  .get("/v1/item/:id", products.getItem) // mysql done
  .delete("/v1/item/:id", products.deleteItem) // mysql done
  .get("/v1/item/store/:id", products.getStoreItem) // mysql done
  .get("/v1/all/item/store/:id", products.getStoreAllItem) // mysql done
  .get("/v1/item/featured/:id", products.getFeaturedItem) // mysql done 

//favourite products
router
  .get("/v1/ref_prod_fav/:id", products.getRef_prod_fav) //mysql done
  .post("/v1/ref_prod_fav", products.addRef_prod_fav) // mysql done 
  .put("/v1/ref_prod_fav/:id", products.editRef_prod_fav) // mysql done
  .delete("/v1/ref_prod_fav/:id", products.deleteRef_prod_fav) // mysql done
  .get("/v1/user/ref_prod_fav/:id", products.userRef_prod_fav) // debug the logic // we need items and products od the user by userID
  .get("/v1/store/user/ref_prod_fav/:id/:storeID", products.userStoreRef_prod_fav) // mysql done

//order-product
router
  .get("/v1/ref_trans_products/:id", products.getRef_trans_prod) // mysql done
  .post("/v1/ref_trans_products", products.addRef_trans_products) // mysql done 
  .put("/v1/ref_trans_products/:orderID/:itemID", products.editRef_trans_prod) // new url
  .delete("/v1/ref_trans_products/:orderID/:itemID", products.deleteRef_trans_prod) // new url

//nutritions
  .get("/v1/nutrition/:id", products.get_nutrition)
  .post("/v1/nutrition", products.add_nutrition)
  .put("/v1/nutrition/:id", products.edit_nutrition) 
  .delete("/v1/nutrition/:id", products.delete_nutrition) 

module.exports = router  