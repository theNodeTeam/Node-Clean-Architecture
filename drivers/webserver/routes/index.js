const express = require('express')
const router = express.Router()

const products = require('./products')

//products
router
  .get('/products', products.index) // mysq done
  .get('/products/:id', products.show)  // mysql done
  .post('/products', products.create) // mysql done
  .put("/v1/product/:id", products.editProduct) // mysql done

//category
router
  .post("/v1/category", products.addCategory) // mysql done but
  .get("/v1/category", products.getCategories) // mysql done
  .get("/v1/category/:id", products.getCategory) // mysql done
  .put("/v1/category/:id", products.editCategory) // mysql done

//subcategory
router
  .post("/v1/subCategory", products.addSubCategory) // mysql done but
  .get("/v1/subCategory", products.getSubCategories) // mysql done
  .get("/v1/subCategory/:id", products.getSubCategory) // mysql done
  .put("/v1/subCategory/:id", products.editSubCategory) // mysql done

//item
router
  .get("/v1/item", products.getItems) // mysql done
  .post("/v1/item", products.addItem) // mysql done
  .put("/v1/item/:id", products.editItem) // mysql done
  .get("/v1/item/:id", products.getItem) // mysql done
  .delete("/v1/item/:id", products.deleteItem) // mysql done but
  .get("/v1/item/store/:id", products.getStoreItem) // mysql done
  .get("/v1/all/item/store/:id", products.getStoreAllItem) 
  .get("/v1/item/featured/:id", products.getFeaturedItem);

//favourite products
router
  .get("/v1/ref_prod_fav", products.getRef_prod_fav)
  .post("/v1/ref_prod_fav", products.addRef_prod_fav)
  .put("/v1/ref_prod_fav/:id", products.editRef_prod_fav)
  .delete("/v1/ref_prod_fav/:id", products.deleteRef_prod_fav)
  .get("/v1/user/ref_prod_fav/:id", products.userRef_prod_fav)
  .get("/v1/store/user/ref_prod_fav/:id/:storeID", products.userStoreRef_prod_fav);

  //order-product
router
  .get("/v1/ref_trans_products/:id", products.getRef_trans_prod)
  .post("/v1/ref_trans_products", products.addRef_trans_products)
  .put("/v1/ref_trans_products/:id", products.editRef_trans_prod)
  .delete("/v1/ref_trans_products/:id", products.deleteRef_trans_prod);



module.exports = router  