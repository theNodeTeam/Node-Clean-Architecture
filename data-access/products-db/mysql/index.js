let connection = require('../../../db/mysql/connection') // DB

let serialize = require('./serializer') // serializer custom to db
let categorySerializer = require('./categorySerializer') // serializer custom to db
let subCategorySerializer = require('./subCategorySerializer') // serializer custom to db
let itemsSerializer = require('./itemsSerializer') // serializer custom to db

let makeProduct = require('../../../models/product/index') // model
let makeCategory = require('../../../models/category/index') // model
let makeSubCategory = require('../../../models/subCategory/index') // model
let makeItem = require('../../../models/item/index') // model


let makeTransProduct = require('../../../models/transProduct/index') // model
let favouriteSerializer = require('./favouriteSerializer') // serializer custom to db
let transProdSerializer = require('./transProduct') // serializer custom to db

// const products = require('../../../db/memory/products')

let listproducts = () => {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM product", function (err, result, fields) {
      if (!err) {
        resolve(Promise.resolve(serialize(JSON.parse(JSON.stringify(result)))))
      }
      else reject(err);
    });
  });
}

let findProduct = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM product WHERE productID=" + val, function (err, result, fields) {
      if (!err) {
        let getVal={}
        if (result.length> 0) {
          getVal = {
            "productID": result[0].productID,
            "productName": result[0].productName,
            "productDescription": result[0].productDescription,
            "productType": result[0].productType,
            "productBarcode": result[0].productBarcode
          }
        } else {
          getVal={}
        }
        resolve(Promise.resolve(serialize(JSON.parse(JSON.stringify(getVal)))))
      }
      else reject(err);
    });
  }); 
}  



let addProduct = (productInfo) => {
  let productGet = makeProduct(productInfo)
  pName = productGet.getProductName()
  pDescription = productGet.getProductDescription()
  pType = productGet.getProductType()
  pBarcode = productGet.getProductBarcode()
  let insertQuery = "INSERT INTO product SET productName='" + pName + "',productDescription='" + pDescription + "',productType='" + pType + "',productBarcode='" + pBarcode + "'"
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(findProduct('productID', result.insertId))
      }
      else return error
    })
  })
}

let editProduct = (id,productInfo) => {
  let productGet = makeProduct(productInfo)
  pName = productGet.getProductName()
  pDescription = productGet.getProductDescription()
  pType = productGet.getProductType()
  pBarcode = productGet.getProductBarcode()
  let insertQuery = "UPDATE product SET productName='" + pName + "',productDescription='" + pDescription + "',productType='" + pType + "',productBarcode='" + pBarcode + "' WHERE productID='"+id+"'"
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(findProduct('productID', id))
      }
      else return error
    })
  })
}


let addCategory = (categoryInfo) => {
  let category = makeCategory(categoryInfo)
    let cName= category.getCategoryName()
    let cDescription= category.getCategoryDescription()
    let insertQuery = "INSERT INTO category SET categoryName='" + cName + "',categoryDescription='" + cDescription + "'"
    return new Promise(function (resolve, reject) {
      connection.query(insertQuery, (error, result) => {
        if (!error) {
          resolve(getCategory('categoryID', result.insertId))
        }
        else return error
      })
    })
}

let getCategories = () => {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM category", function (err, result, fields) {
      if (!err) {
        resolve(Promise.resolve(categorySerializer(JSON.parse(JSON.stringify(result)))))
      }
      else reject(err);
    });
  });
}


let getCategory = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM category WHERE categoryID=" + val, function (err, result, fields) {
      if (!err) {
        let getVal={}
        if (result.length > 0) {
           getVal = {
            "categoryID": result[0].categoryID,
            "categoryName": result[0].categoryName,
            "categoryDescription": result[0].categoryDescription,
          }
        } else {
           getVal = { }
        }
        
        resolve(Promise.resolve(categorySerializer(JSON.parse(JSON.stringify(getVal)))))
      }
      else reject(err);
    });
  });
}

let editCategory = (id,categoryInfo) => {
  let category = makeCategory(categoryInfo)
    let cName= category.getCategoryName()
    let cDescription= category.getCategoryDescription()
    let insertQuery = "UPDATE category SET categoryName='" + cName + "',categoryDescription='" + cDescription + "' WHERE categoryID='"+id+"'"
    return new Promise(function (resolve, reject) {
      connection.query(insertQuery, (error, result) => {
        if (!error) {
          resolve(getCategory('categoryID', id))
        }
        else return error
      })
    })
}


let addSubCategory = (subCategoryInfo) => {
  let subCategory = makeSubCategory(subCategoryInfo)
    scName= subCategory.getSubCategoryName()
    scDescription= subCategory.getSubCategoryDescription()
    categoryID= subCategory.getCategoryID()
    // productID= subCategory.getproductID()
    let insertQuery = "INSERT INTO subcategory SET subCategoryName='" + scName + "',subCategoryDescription='" + scDescription + "',categoryOD='" + categoryID + "'"
    // let insertQuery = "INSERT INTO subcategory SET subCategoryName='" + scName + "',subCategoryDescription='" + scDescription + "'"
    return new Promise(function (resolve, reject) {
      connection.query(insertQuery, (error, result) => {
        if (!error) {
          resolve(getSubCategory('subCategoryID', result.insertId))
        }
        else return error
      })
    })
}

let getSubCategories = () => {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM subcategory", function (err, result, fields) {
      if (!err) {
        resolve(Promise.resolve(subCategorySerializer(JSON.parse(JSON.stringify(result)))))
      }
      else reject(err);
    });
  });
}

let getSubCategory = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM subcategory WHERE subCategoryID=" + val, function (err, result, fields) {
      if (!err) {
        let getVal={}
        if (result.length > 0) {
           getVal = {
            "subCategoryID": result[0].subCategoryID,
            "subCategoryName": result[0].subCategoryName,
            "subCategoryDescription": result[0].subCategoryDescription,
            "categoryID": result[0].categoryID,
            "productID": result[0].productID,
          }
        } else {
           getVal = { }
        }
        
        resolve(Promise.resolve(subCategorySerializer(JSON.parse(JSON.stringify(getVal)))))
      }
      else reject(err);
    });
  });
}

let editSubCategory = (id,subCategoryInfo) => {
  let subCategory = makeSubCategory(subCategoryInfo)
    scName= subCategory.getSubCategoryName()
    scDescription= subCategory.getSubCategoryDescription()
    // categoryID= subCategory.getCategoryID()
    // productID= subCategory.getProductID()
    // let insertQuery = "UPDATE subcategory SET subCategoryName='" + scName + "',subCategoryDescription='" + scDescription + "',categoryOD='" + categoryID + "',productID='" + productID + "' WHERE subCategoryID='"+id+"'"
    let insertQuery = "UPDATE subcategory SET subCategoryName='" + scName + "',subCategoryDescription='" + scDescription + "' WHERE subCategoryID='"+id+"'"
    return new Promise(function (resolve, reject) {
      connection.query(insertQuery, (error, result) => {
        if (!error) {
          resolve(getSubCategory('categoryID', id))
        }
        else return error
      })
    })
}

let getItems = () => {
  return new Promise(function (resolve, reject) {
    let run_query="SELECT * FROM items LEFT JOIN product on product.productID=items.productID"
    connection.query(run_query, function (err, result, fields) {
      // console.log(result)
      if (!err) {
        resolve(Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(result)))))
      }
      else reject(err);
    });
  });
}


let addItem = (itemInfo) => {
  let item = makeItem(itemInfo)
    productID= item.getproductID(),
    storeID= item.getstoreID(),
    productPrice= item.getproductPrice(),
    productDiscount= item.getproductDiscount(),
    isFeatured= item.getisFeatured(),
    isOutOfStock= item.getisOutOfStock(),
    outOfStockDate= item.getoutOfStockDate(),
    expDate= item.getexpDate(),
    featuredDetails= item.getfeaturedDetails(),
    quantity= item.getquantity(),
    speciaIInstructions= item.getspeciaIInstructions()
    discount= item.getdiscount(),
    itemBarcode= item.getitemBarcode(),
    noOfImage= item.getnoOfImage(),
    disclaimer= item.getdisclaimer(),
    nutritionFacts= item.getnutritionFacts(),
    itemActive= item.getitemActive()
    let insertQuery =  "INSERT INTO items SET productID=" + "'" + productID + "'" + "," + "storeID=" + "'" + storeID + "'" + "," + "productPrice=" + "'" + productPrice + "'" + "," + "productDiscount=" + "'" + productDiscount + "'" + "," + "isFeatured=" + "'" + isFeatured + "'" + "," + "isOutOfStock=" + "'" + isOutOfStock + "'" + "," + "outOfStockDate=" + "'" + outOfStockDate + "'" + "," + "expDate=" + "'" + expDate + "'" + "," + "featuredDetails=" + "'" + featuredDetails + "'" + "," + "quantity=" + "'" + quantity + "'" + "," + "specialInstrauctions=" + "'" + specialInstrauctions + "'" + "," + "discount=" + "'" + discount + "'" + "," + "itemBarcode=" + "'" + itemBarcode + "'"
    return new Promise(function (resolve, reject) {
      connection.query(insertQuery, (error, result) => {
        if (!error) {
          resolve(getItem('itemID', result.insertId))
        }
        else return error
      })
    })
}

let editItem = (id,itemInfo) => {
  let item = makeItem(itemInfo)
    productID= item.getproductID(),
    storeID= item.getstoreID(),
    productPrice= item.getproductPrice(),
    productDiscount= item.getproductDiscount(),
    isFeatured= item.getisFeatured(),
    isOutOfStock= item.getisOutOfStock(),
    outOfStockDate= item.getoutOfStockDate(),
    expDate= item.getexpDate(),
    featuredDetails= item.getfeaturedDetails(),
    quantity= item.getquantity(),
    speciaIInstructions= item.getspeciaIInstructions()
    discount= item.getdiscount(),
    itemBarcode= item.getitemBarcode(),
    noOfImage= item.getnoOfImage(),
    disclaimer= item.getdisclaimer(),
    nutritionFacts= item.getnutritionFacts(),
    itemActive= item.getitemActive()
    let insertQuery =  "INSERT INTO items SET productID=" + "'" + productID + "'" + "," + "storeID=" + "'" + storeID + "'" + "," + "productPrice=" + "'" + productPrice + "'" + "," + "productDiscount=" + "'" + productDiscount + "'" + "," + "isFeatured=" + "'" + isFeatured + "'" + "," + "isOutOfStock=" + "'" + isOutOfStock + "'" + "," + "outOfStockDate=" + "'" + outOfStockDate + "'" + "," + "expDate=" + "'" + expDate + "'" + "," + "featuredDetails=" + "'" + featuredDetails + "'" + "," + "quantity=" + "'" + quantity + "'" + "," + "specialInstrauctions=" + "'" + specialInstrauctions + "'" + "," + "discount=" + "'" + discount + "'" + "," + "itemBarcode=" + "'" + itemBarcode + "' WHERE itemID='"+id+"'"
    return new Promise(function (resolve, reject) {
      connection.query(insertQuery, (error, result) => {
        if (!error) {
          resolve(getItem('itemID', id))
        }
        else return error
      })
    })
  
}

let getItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM items LEFT JOIN product on product.productID=items.productID WHERE items.itemID=" + val, function (err, result, fields) {
      if (!err) {
        let getVal={}
        if (result.length > 0) {
           getVal = {
            "productID": result[0].productID,
            "storeID" : result[0].storeID,
            "productPrice" : result[0].productPrice,
            "productDiscount" : result[0].productDiscount,
            "isFeatured=" :result[0].isFeatured,
            "isOutOfStock" : result[0].isOutOfStock,
            "outOfStockDate" : result[0].outOfStockDate,
            "expDate" : result[0].expDate,
            "featuredDetails" : result[0].featuredDetails,
            "quantity" : result[0].quantity,
            "speciaIInstructions" : result[0].speciaIInstruction,
            "discount" : result[0].discount,
            "itemBarcode" : result[0].itemBarcode,
            "noOfImage" : result[0].noOfImage,
            "disclaimer" : result[0].disclaimer,
            "nutritionFacts" : result[0].nutritionFacts,
            "itemActive" :result[0].itemActiv
          }
        } else {
           getVal = { }
        }
        
        resolve(Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(getVal)))))
      }
      else reject(err);
    });
  });
}

let deleteItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query="DELETE FROM items WHERE itemID='"+val+"'"
    connection.query(run_query, function (err, result, fields) {
      // console.log(result)
      if (!err) {
        resolve(getItems)
      }
      else reject(err);
    });
  });
}


let getStoreItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query="SELECT * FROM items LEFT JOIN product on product.productID=items.productID WHERE items.storeID='"+val+"'"
    connection.query(run_query, function (err, result, fields) {
      // console.log(result)
      if (!err) {
        resolve(Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(result)))))
      }
      else reject(err);
    });
  });
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