let STUDENTS = require('../../../db/memory/students') // DB
let PRODUCTS = require('../../../db/memory/products') // DB
let makeStudent = require('../../../models/student/index') // model
let makeProduct = require('../../../models/student/index') // model
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


let findStudentsBy = (prop, val) => {
  if (prop === 'grade') {prop = 'year'}
  let student = STUDENTS.filter(student => student[prop] == val)
  return Promise.resolve(serialize(student)) 
}


let deleteStudent = (id) => {
  return findStudent({id})
    .then(student => {
      if (student.id == id) {
        STUDENTS = STUDENTS.filter(student => student.serial != id)
        return {
          id,
          status: 'success'
        }
      }
      return {
        status: 'fail'
      }
    })
}

let dropAll = () => {
  STUDENTS = [];
  return STUDENTS;
}

module.exports = {
  listproducts,
  findProduct,
  findStudentsBy,
  addProduct,
  deleteStudent,
  dropAll
}
