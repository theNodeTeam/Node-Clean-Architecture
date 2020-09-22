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