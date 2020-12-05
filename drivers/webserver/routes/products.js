/*
    name: PRODUCTS (sub-controller)
    path: drivers/webserver/routes/products.js
    Objective: In this we call the methods from data access layer. this file does not need to know that the function it calling is connected from which database.
    next File: products > data-access > products-db > index
*/

let ProductsDb = require('../../../data-access/products-db')

let products = module.exports = {}

//function to get all products
products.index = (req, res, next) => {
  ProductsDb.listproducts()
    .then(data => {
      res.send(data)
    })
}

//function to get product by product ID 
products.show = (req, res, next) => {
  ProductsDb.findProduct('id', req.params.id)
    .then(data => {
      res.send(data)
    })
}

//function to create product
products.create = (req, res, next) => {
  ProductsDb.addProduct(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit product
products.editProduct = (req, res, next) => {
  ProductsDb.editProduct(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to add category
products.addCategory = (req, res, next) => {
  ProductsDb.addCategory(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get all categories 
products.getCategories = (req, res, next) => {
  ProductsDb.getCategories()
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get category by categoryID
products.getCategory = (req, res, next) => {
  ProductsDb.getCategory('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit category
products.editCategory = (req, res, next) => {
  ProductsDb.editCategory(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to add ProductImage
products.addProductImage = (req, res, next) => {
  ProductsDb.addProductImage(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get all ProductImage 
products.getProductImages = (req, res, next) => {
  ProductsDb.getProductImages()
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get ProductImage by ProductImageID
products.getProductImage = (req, res, next) => {
  ProductsDb.getProductImage('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit ProductImage
products.editProductImage = (req, res, next) => {
  ProductsDb.editProductImage(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get ProductImage by productID
products.getProductImagesByProductID = (req, res, next) => {
  ProductsDb.getProductImagesByProductID('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to add subcategory
products.addSubCategory = (req, res, next) => {
  ProductsDb.addSubCategory(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get all subcategories
products.getSubCategories = (req, res, next) => {
  ProductsDb.getSubCategories()
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get subcategory by categoryID
products.getSubCategory = (req, res, next) => {
  ProductsDb.getSubCategory('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit subcategory
products.editSubCategory = (req, res, next) => {
  ProductsDb.editSubCategory(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to all items
products.getItems = (req, res, next) => {
  ProductsDb.getItems()
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to add item
products.addItem = (req, res, next) => {
  ProductsDb.addItem(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit item
products.editItem = (req, res, next) => {
  ProductsDb.editItem(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get item by itemID
products.getItem = (req, res, next) => {
  ProductsDb.getItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to delete Item
products.deleteItem = (req, res, next) => {
  ProductsDb.deleteItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to all items of a store
products.getStoreItem = (req, res, next) => {
  ProductsDb.getStoreItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to items of store 
products.getStoreAllItem = (req, res, next) => {
  ProductsDb.getStoreAllItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get all featured items
products.getFeaturedItem = (req, res, next) => {
  ProductsDb.getFeaturedItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


//function to get favorite product
products.getRef_prod_fav = (req, res, next) => {
  ProductsDb.getRef_prod_fav('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to add favorite product
products.addRef_prod_fav = (req, res, next) => {
  ProductsDb.addRef_prod_fav(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit favorite product
products.editRef_prod_fav = (req, res, next) => {
  ProductsDb.editRef_prod_fav(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to delete favorite product
products.deleteRef_prod_fav = (req, res, next) => {
  ProductsDb.deleteRef_prod_fav('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get all favorite products of user
products.userRef_prod_fav = (req, res, next) => {
  ProductsDb.userRef_prod_fav('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get all favorite items of user of single store
products.userStoreRef_prod_fav = (req, res, next) => {
  ProductsDb.userStoreRef_prod_fav('id', req.params.id, 'storeID', req.params.storeID)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to items of an order
products.getRef_trans_prod = (req, res, next) => {
  ProductsDb.getRef_trans_prod('orderNumber', req.params.orderNumber)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to add item in an order
products.addRef_trans_products = (req, res, next) => {
  ProductsDb.addRef_trans_products(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit item information in an order
products.editRef_trans_prod = (req, res, next) => {
  ProductsDb.editRef_trans_prod( req.params.orderNumber,req.params.itemID, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to delete item from an order
products.deleteRef_trans_prod = (req, res, next) => {
  ProductsDb.deleteRef_trans_prod(req.params.orderNumber,req.params.itemID)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to get nutritions
products.get_nutrition = (req, res, next) => {
  ProductsDb.get_nutrition('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to add nutritions
products.add_nutrition = (req, res, next) => {
  ProductsDb.add_nutrition(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to edit nutrition
products.edit_nutrition = (req, res, next) => {
  ProductsDb.edit_nutrition( req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

//function to delete nutrition
products.delete_nutrition = (req, res, next) => {
  ProductsDb.delete_nutrition('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}
