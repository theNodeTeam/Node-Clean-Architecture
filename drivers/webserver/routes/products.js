let ProductsDb = require('../../../data-access/products-db')

let products = module.exports = {}

products.index = (req, res, next) => {
  ProductsDb.listproducts()
    .then(data => {
      res.send(data)
    })
}

products.show = (req, res, next) => {
  ProductsDb.findProduct('id', req.params.id)
    .then(data => {
      res.send(data)
    })
}

products.create = (req, res, next) => {
  ProductsDb.addProduct(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.editProduct = (req, res, next) => {
  ProductsDb.editProduct(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.addCategory = (req, res, next) => {
  ProductsDb.addCategory(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.getCategories = (req, res, next) => {
  ProductsDb.getCategories()
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.getCategory = (req, res, next) => {
  ProductsDb.getCategory('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.editCategory = (req, res, next) => {
  ProductsDb.editCategory(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.addSubCategory = (req, res, next) => {
  ProductsDb.addSubCategory(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.getSubCategories = (req, res, next) => {
  ProductsDb.getSubCategories()
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.getSubCategory = (req, res, next) => {
  ProductsDb.getSubCategory('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.editSubCategory = (req, res, next) => {
  ProductsDb.editSubCategory(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.getItems = (req, res, next) => {
  ProductsDb.getItems()
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.addItem = (req, res, next) => {
  ProductsDb.addItem(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.editItem = (req, res, next) => {
  ProductsDb.editItem(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.getItem = (req, res, next) => {
  ProductsDb.getItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.deleteItem = (req, res, next) => {
  ProductsDb.deleteItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.getStoreItem = (req, res, next) => {
  ProductsDb.getStoreItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.getStoreAllItem = (req, res, next) => {
  ProductsDb.getStoreAllItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.getFeaturedItem = (req, res, next) => {
  ProductsDb.getFeaturedItem('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.getRef_prod_fav = (req, res, next) => {
  ProductsDb.getRef_prod_fav('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.addRef_prod_fav = (req, res, next) => {
  ProductsDb.addRef_prod_fav(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.editRef_prod_fav = (req, res, next) => {
  ProductsDb.editRef_prod_fav(req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.deleteRef_prod_fav = (req, res, next) => {
  ProductsDb.deleteRef_prod_fav('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.userRef_prod_fav = (req, res, next) => {
  ProductsDb.userRef_prod_fav('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

// missing storID 
products.userStoreRef_prod_fav = (req, res, next) => {
  ProductsDb.userStoreRef_prod_fav('id', req.params.id, 'storeID', req.params.storeID)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.getRef_trans_prod = (req, res, next) => {
  ProductsDb.getRef_trans_prod('orderID', req.params.orderID)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.addRef_trans_products = (req, res, next) => {
  ProductsDb.addRef_trans_products(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

// id params missing
products.editRef_trans_prod = (req, res, next) => {
  ProductsDb.editRef_trans_prod( req.params.orderID,req.params.itemID, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.deleteRef_trans_prod = (req, res, next) => {
  ProductsDb.deleteRef_trans_prod(req.params.orderID,req.params.itemID)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

////
products.get_nutrition = (req, res, next) => {
  ProductsDb.get_nutrition('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.add_nutrition = (req, res, next) => {
  ProductsDb.add_nutrition(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}

products.edit_nutrition = (req, res, next) => {
  ProductsDb.edit_nutrition( req.params.id, req.body)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}


products.delete_nutrition = (req, res, next) => {
  ProductsDb.delete_nutrition('id', req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(next)
}
