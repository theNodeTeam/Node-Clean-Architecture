const express = require('express')
const router = express.Router()

const products = require('./products')

router
  .get('/products', products.index)
  .get('/products/:id', products.show)
  .post('/products', products.create)
  

module.exports = router 