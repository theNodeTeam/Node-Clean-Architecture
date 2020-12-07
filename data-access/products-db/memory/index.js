let PRODUCTS = require('../../../db/memory/products') // DB
let makeProduct = require('../../../models/product/index') // model
let serialize = require('./serializer') // serializer custom to db
const products = require('../../../db/memory/products')

let listproducts = () => {
  return Promise.resolve(serialize(PRODUCTS)) 
}

let findProduct = (prop, val) => {
  if (prop === 'id') { prop = 'productID' }
  let student = PRODUCTS.find(product => product[prop] == val)
  return Promise.resolve(serialize(student)) 
} 

let addProduct = (productInfo) => {
  let product = makeProduct(productInfo)
  let newProduct = { 
    productID: PRODUCTS.length + 1, 
    productName: product.getProductName(),
    productDescription: product.getProductDescription(),
    productType: product.getProductType(),
    productBarcode: product.getProductBarcode()
  } 
  PRODUCTS.push(newProduct)
  return findProduct('productID', newProduct.productID)
}


module.exports = {
  listproducts,
  findProduct,
  addProduct,
}
