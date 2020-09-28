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
  let student = makeProduct(productInfo)
  let newProduct = { 
    productID: PRODUCTS.length + 1, 
    productName: student.getProductName(),
    productDescription: student.getProductDescription(),
    productType: student.getProductType(),
    productBarcode: student.getProductBarcode()
  } 
  PRODUCTS.push(newProduct)
  return findProduct('productID', newProduct.productID)
}


module.exports = {
  listproducts,
  findProduct,
  addProduct,
}
