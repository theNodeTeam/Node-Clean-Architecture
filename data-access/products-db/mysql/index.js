let PRODUCTS = require('../../../db/memory/products') // DB
let makeProduct = require('../../../models/product/index') // model
let makeCategory = require('../../../models/category/index') // model
let makeSubCategory = require('../../../models/subCategory/index') // model
let makeItem = require('../../../models/subCategory/index') // model
let makeTransProduct = require('../../../models/transProduct/index') // model
let serialize = require('./serializer') // serializer custom to db
let categorySerializer = require('./categorySerializer') // serializer custom to db
let subCategorySerializer = require('./subCategorySerializer') // serializer custom to db
let itemsSerializer = require('./itemsSerializer') // serializer custom to db
let favouriteSerializer = require('./favouriteSerializer') // serializer custom to db
let transProdSerializer = require('./transProduct') // serializer custom to db

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
    productDescription: product.getProductDescription()
  } 
  PRODUCTS.push(newProduct)
  return findProduct('productID', newProduct.productID)
}

let editProduct = (id,productInfo) => {
  let product = makeProduct(productInfo)
  let newProduct = { 
    productName: product.getProductName(),
    productDescription: product.getProductDescription(),
    productType: product.getProductType(),
    productBarcode: product.getProductBarcode()
  } 
  PRODUCTS.push(newProduct) //qurey here
  return findProduct('productID', newProduct.productID)
}


let addCategory = (categoryInfo) => {
  let category = makeCategory(categoryInfo)
  let newCategory = { 
    categoryName: category.getCategoryName(),
    categoryDescription: category.getCategoryDescription()
  } 
  //query logic
  return getCategory('categoryID', newCategory.categoryID)
}

let getCategories = () => {
  return Promise.resolve(categorySerializer("output array")) 
}


let getCategory = (prop, val) => {
  if (prop === 'id') { prop = 'categoryID' }
  //logic here 
  return Promise.resolve(categorySerializer("data")) 
}

let editCategory = (id,categoryInfo) => {
  let category = makeCategory(categoryInfo)
  let newCategory = { 
    categoryName: category.getCategoryName(),
    categoryDescription: category.getCategoryDescription()
  } 
  PRODUCTS.push(newCategory) //qurey here
  return getCategory('categoryID', newCategory.productID)
}


let addSubCategory = (subCategoryInfo) => {
  let subCategory = makeSubCategory(subCategoryInfo)
  let newSubCategory = { 
    subCategoryName: subCategory.getSubCategoryName(),
    subCategoryDescription: subCategory.getSubCategoryDescription()
  } 
  //query logic
  return getSubCategory('subCategoryID', newSubCategory.subCategoryID)
}

let getSubCategories = () => {
  return Promise.resolve(subCategorySerializer("output array")) 
}

let getSubCategory = (prop, val) => {
  if (prop === 'id') { prop = 'subCategoryID' }
  //logic here 
  return Promise.resolve(subCategorySerializer("data")) 
}

let editSubCategory = (id,subCategoryInfo) => {
  let subCategory = makeSubCategory(subCategoryInfo)
  let newSubCategory = { 
    subCategoryName: subCategory.getSubCategoryName(),
    subCategoryDescription: subCategory.getSubCategoryDescription()
  } 
  PRODUCTS.push(newSubCategory) //qurey here
  return getSubCategory('subCategoryID', newSubCategory.subCategoryID)
}

let getItems = () => {
  return Promise.resolve(itemsSerializer("output array")) 
}


let addItem = (itemInfo) => {
  let item = makeItem(itemInfo)
  let newItem = { 
    productID: item.getproductID(),
    storeID: item.getstoreID(),
    productPrice: item.getproductPrice(),
    productDiscount: item.getproductDiscount(),
    isFeatured: item.getisFeatured(),
    isOutOfStock: item.getisOutOfStock(),
    outOfStockDate: item.getoutOfStockDate(),
    expDate: item.getexpDate(),
    featuredDetails: item.getfeaturedDetails(),
    quantity: item.getquantity(),
    speciaIInstructions: item.getspeciaIInstructions(),
    discount: item.getdiscount(),
    itemBarcode: item.getitemBarcode(),
    noOfImage: item.getnoOfImage(),
    disclaimer: item.getdisclaimer(),
    nutritionFacts: item.getnutritionFacts(),
    itemActive: item.getitemActive()
  } 
  //query logic
  return getItem('itemID', newItem.itemID)
}

let editItem = (id,itemInfo) => {
  let item = makeItem(itemInfo)
  let newItem = { 
    productID: item.getproductID(),
    storeID: item.getstoreID(),
    productPrice: item.getproductPrice(),
    productDiscount: item.getproductDiscount(),
    isFeatured: item.getisFeatured(),
    isOutOfStock: item.getisOutOfStock(),
    outOfStockDate: item.getoutOfStockDate(),
    expDate: item.getexpDate(),
    featuredDetails: item.getfeaturedDetails(),
    quantity: item.getquantity(),
    speciaIInstructions: item.getspeciaIInstructions(),
    discount: item.getdiscount(),
    itemBarcode: item.getitemBarcode(),
    noOfImage: item.getnoOfImage(),
    disclaimer: item.getdisclaimer(),
    nutritionFacts: item.getnutritionFacts(),
    itemActive: item.getitemActive()
  } 
  PRODUCTS.push(newItem) //qurey here
  return getItem('itemID', newItem.itemID)
}

let getItem = (prop, val) => {
  if (prop === 'id') { prop = 'itemID' }
  //logic here 
  return Promise.resolve(itemsSerializer("data")) 
}

let deleteItem = (prop, val) => {
  if (prop === 'id') { prop = 'itemID' }
  //logic here 
}


let getStoreItem = (prop, val) => {
  if (prop === 'id') { prop = 'storeID' }
  //logic here 
  return Promise.resolve(itemsSerializer("data")) 
}

let getStoreAllItem = (prop, val) => {
  if (prop === 'id') { prop = 'storeID' }
  //logic here 
  return Promise.resolve(itemsSerializer("data")) 
}

let getFeaturedItem = (prop, val) => {
  if (prop === 'id') { prop = 'storeID' }
  //logic here 
  return Promise.resolve(itemsSerializer("data")) 
}


let getRef_prod_fav = (prop, val) => {
  //logic here 
  return Promise.resolve(favouriteSerializer("data")) 
}


let addRef_prod_fav = (favInfo) => {
  let favItem = makeFavItem(favInfo)
  let newFavItem = { 
    userID: favItem.getUserID(),
    itemID: favItem.getItemID()
  } 
  //query logic
  return getFavItem('favID', newFavItem.favID)
}


let editRef_prod_fav = (favInfo) => {
  let favItem = makeFavItem(favInfo)
  let newFavItem = { 
    userID: favItem.getUserID(),
    itemID: favItem.getItemID()
  } 
  //query logic
  return getFavItem('favID', newFavItem.favID)
}


let deleteRef_prod_fav = (prop, val) => {
  if (prop === 'id') { prop = 'favID' }
  //logic here 
  return Promise.resolve(favouriteSerializer("data")) 
}


let userRef_prod_fav = (prop, val) => {
  if (prop === 'id') { prop = 'favID' }
  //logic here 
  return Promise.resolve(favouriteSerializer("data")) 
}

let userStoreRef_prod_fav = (prop, val) => {
  if (prop === 'id') { prop = 'userID' }
  //logic here 
  return Promise.resolve(favouriteSerializer("data")) 
}

let getRef_trans_prod = (prop, val) => {
  if (prop === 'id') { prop = 'orderID' }
  //logic here 
  return Promise.resolve(transProdSerializer("data")) 
}

let addRef_trans_products = (transProdInfo) => {
  let transProdItem = makeTransProduct(transProdInfo)
  let newTransProd = { 
    orderID: transProdItem.getUserID(),
    itemID: transProdItem.getItemID(),
    itemQuantity: transProdItem.getItemID(),
  } 
  //query logic
  return getRef_trans_prod('orderID', newTransProd.orderID)
}

let editRef_trans_prod = (transProdInfo) => {
  let transProdItem = makeTransProduct(transProdInfo)
  let newTransProd = { 
    orderID: transProdItem.getUserID(),
    itemID: transProdItem.getItemID(),
    itemQuantity: transProdItem.getItemID(),
  } 
  //query logic
  return getRef_trans_prod('orderID', newTransProd.orderID)
}

let deleteRef_trans_prod = (prop, val) => {
  if (prop === 'id') { prop = 'id' }
  //logic here 
  return Promise.resolve(transProdSerializer("data")) 
}

module.exports = {
  listproducts,
  findProduct,
  addProduct,
  editProduct,
  addCategory,
  getCategories,
  getCategory,
  editCategory,
  addSubCategory,
  getSubCategories,
  getSubCategory,
  editSubCategory,
  getItems,
  addItem,
  editItem,
  getItem,
  deleteItem,
  getStoreItem,
  getStoreAllItem,
  getFeaturedItem,
  getRef_prod_fav,
  addRef_prod_fav,
  editRef_prod_fav,
  deleteRef_prod_fav,
  userRef_prod_fav,
  userStoreRef_prod_fav,
  getRef_trans_prod,
  addRef_trans_products,
  editRef_trans_prod,
  deleteRef_trans_prod
}