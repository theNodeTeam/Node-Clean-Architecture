/*
    name: MYSQL QUERY FILE
    path: data-access/product-db/mysql/index.js
    Objective: In this file we have the all query logic, all functions get input process it and return the output to the serializer.
    next File: index > serlizer 
*/

let connection = require('../../../db/mysql/connection'); // DB

let serialize = require('./serializer'); // serializer custom to db
let categorySerializer = require('./categorySerializer'); // serializer custom to db
let productImagesSerializer = require('./productImagesSerializer'); // serializer custom to db
let subCategorySerializer = require('./subCategorySerializer'); // serializer custom to db
let itemsSerializer = require('./itemsSerializer'); // serializer custom to db
let itemCategorySerializer = require('./ItemCategorySerializer'); // serializer custom to db
let favouriteSerializer = require('./favouriteSerializer'); // serializer custom to db
let nutritionSerializer = require('./nutritionSerializer'); // serializer custom to db

let makeProduct = require('../../../models/product/index'); // model
let makeCategory = require('../../../models/category/index'); // model
let makeProductImages = require('../../../models/productImages/index'); // model
let makeSubCategory = require('../../../models/subCategory/index'); // model
let makeItem = require('../../../models/item/index'); // model
let makeFavItem = require('../../../models/favItem/index'); // model yasir
let makeNutrition = require('../../../models/nutrition/index'); // model

/*
objective: function to get all products
Input: not required
Output: array of all products
description: after query execution it will Send the data to serializer
*/
let listproducts = () => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT product.productID AS PID,product.productName AS PName,product.productDescription AS PDesc,product.subCategoryID AS PSubCatID,product.productBarcode AS PBarcode,product_images.productImageID AS PIID,product_images.productID AS PIDD,product_images.productImageURL AS PIURL FROM product LEFT JOIN product_images ON product.productID=product_images.productID';
    connection.query(run_query, function (err, result) {
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        if (get_ID != result[i].PID) {
          get_ID = result[i].PID;
          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (get_ID == result[j].PIDD) {
              var ob1 = new Object({
                productImageID: result[j].PIID,
                productID: result[j].PIDD,
                productImageURL: result[j].PIURL,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            productID: result[i].PID,
            productName: result[i].PName,
            productDescription: result[i].PDesc,
            subCategoryID: result[i].PSubCatID,
            productBarcode: result[i].PBarcode,
            productImages: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(Promise.resolve(serialize(JSON.parse(JSON.stringify(arr1)))));
    });
  });
};

/*
objective: function to get product by product ID
Input: product ID in params
Output: object of product
description: after query execution it will Send the data to serializer
*/
let findProduct = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT product.productID AS PID,product.productName AS PName,product.productDescription AS PDesc,product.subCategoryID AS PSubCatID,product.productBarcode AS PBarcode,product_images.productImageID AS PIID,product_images.productID AS PIDD,product_images.productImageURL AS PIURL FROM product LEFT JOIN product_images ON product.productID=product_images.productID WHERE product.productID=' +
      val;
    connection.query(run_query, function (err, result) {
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        if (get_ID != result[i].PID) {
          get_ID = result[i].PID;
          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (get_ID == result[j].PIDD) {
              var ob1 = new Object({
                productImageID: result[j].PIID,
                productID: result[j].PIDD,
                productImageURL: result[j].PIURL,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            productID: result[i].PID,
            productName: result[i].PName,
            productDescription: result[i].PDesc,
            subCategoryID: result[i].PSubCatID,
            productBarcode: result[i].PBarcode,
            productImages: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(Promise.resolve(serialize(JSON.parse(JSON.stringify(arr1)))));
    });
  });
};

/*
objective: function to create product
Input: payload of product in body
Output: object of new created product
description: after query execution it will call the findProduct function
*/
let addProduct = (productInfo) => {
  let productGet = makeProduct(productInfo);
  pName = productGet.getProductName();
  pDescription = productGet.getProductDescription();
  subCategoryID = productGet.getSubCategoryID();
  pBarcode = productGet.getProductBarcode();

  let insertQuery =
    "INSERT INTO product SET productName='" +
    pName +
    "',productDescription='" +
    pDescription +
    "',subCategoryID='" +
    subCategoryID +
    "',productBarcode='" +
    pBarcode +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(findProduct('productID', result.insertId));
      } else return error;
    });
  });
};

/*
objective: function to edit product
Input: payload of product in body and productID in params.
Output: object of updated product
description: after query execution it will call the findProduct function
*/
let editProduct = (id, productInfo) => {
  let productGet = makeProduct(productInfo);
  pName = productGet.getProductName();
  pDescription = productGet.getProductDescription();
  subCategoryID = productGet.getSubCategoryID();
  pBarcode = productGet.getProductBarcode();
  let insertQuery =
    "UPDATE product SET productName='" +
    pName +
    "',productDescription='" +
    pDescription +
    "',subCategoryID='" +
    subCategoryID +
    "',productBarcode='" +
    pBarcode +
    "' WHERE productID='" +
    id +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(findProduct('productID', id));
      } else return error;
    });
  });
};

/*
objective: function to add category
Input: payload of category in body
Output: object of new  created category
description: after query execution it will call the getCategory function
*/
let addCategory = (categoryInfo) => {
  let category = makeCategory(categoryInfo);
  let cName = category.getCategoryName();
  let cDescription = category.getCategoryDescription();
  let insertQuery =
    "INSERT INTO category SET categoryName='" +
    cName +
    "',categoryDescription='" +
    cDescription +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getCategory('categoryID', result.insertId));
      } else return error;
    });
  });
};

/*
objective: function to get all categories
Input: not required
Output: array of all categories
description: after query execution it will Send the data to serializer
*/
let getCategories = () => {
  return new Promise(function (resolve, reject) {
    connection.query('SELECT * FROM category', function (err, result, fields) {
      if (!err) {
        resolve(
          Promise.resolve(
            categorySerializer(JSON.parse(JSON.stringify(result))),
          ),
        );
      } else reject(err);
    });
  });
};

/*
objective: function to get category by categoryID
Input: categoryID in params
Output: object of category
description: after query execution it will Send the data to serializer
*/
let getCategory = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT * FROM category WHERE categoryID=' + val,
      function (err, result, fields) {
        if (!err) {
          let getVal = {};
          if (result.length > 0) {
            getVal = {
              categoryID: result[0].categoryID,
              categoryName: result[0].categoryName,
              categoryDescription: result[0].categoryDescription,
            };
          } else {
            getVal = {};
          }

          resolve(
            Promise.resolve(
              categorySerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        } else reject(err);
      },
    );
  });
};

//
/*
objective: function to edit category
Input: categoryID in params and payload in body
Output: object of updated category
description: after query execution it will call the getCategory function
*/
let editCategory = (id, categoryInfo) => {
  let category = makeCategory(categoryInfo);
  let cName = category.getCategoryName();
  let cDescription = category.getCategoryDescription();
  let insertQuery =
    "UPDATE category SET categoryName='" +
    cName +
    "',categoryDescription='" +
    cDescription +
    "' WHERE categoryID='" +
    id +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getCategory('categoryID', id));
      } else return error;
    });
  });
};

/*
objective: function to add productImages
Input: payload of category in body
Output: object of new  created category
description: after query execution it will call the getCategory function
*/
let addProductImage = (productImagesInfo) => {
  let productImage = makeProductImages(productImagesInfo);
  let productID = productImage.getProductID();
  let productImageURL = productImage.getProductImageURL();
  let insertQuery =
    "INSERT INTO product_images SET productID='" +
    productID +
    "',productImageURL='" +
    productImageURL +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getProductImage('productImageID', result.insertId));
      } else return error;
    });
  });
};

/*
objective: function to get all productImage
Input: not required
Output: array of all categories
description: after query execution it will Send the data to serializer
*/
let getProductImages = () => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT * FROM product_images',
      function (err, result, fields) {
        if (!err) {
          resolve(
            Promise.resolve(
              productImagesSerializer(JSON.parse(JSON.stringify(result))),
            ),
          );
        } else reject(err);
      },
    );
  });
};

/*
objective: function to get ProductImages by productImagesID
Input: productImagesID in params
Output: object of productImages
description: after query execution it will Send the data to serializer
*/
let getProductImage = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT * FROM product_images WHERE productImageID=' + val,
      function (err, result, fields) {
        if (!err) {
          let getVal = {};
          if (result.length > 0) {
            getVal = {
              productImageID: result[0].productImageID,
              productID: result[0].productID,
              productImageURL: result[0].productImageURL,
            };
          } else {
            getVal = {};
          }

          resolve(
            Promise.resolve(
              productImagesSerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        } else reject(err);
      },
    );
  });
};

/*
objective: function to get ProductImagesByProductID by productID
Input: productImagesID in params
Output: object of productImages
description: after query execution it will Send the data to serializer
*/
let getProductImagesByProductID = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT * FROM product_images WHERE productID=' + val,
      function (err, result, fields) {
        if (!err) {
          if (result.length > 0) {
            resolve(
              Promise.resolve(
                productImagesSerializer(JSON.parse(JSON.stringify(result))),
              ),
            );
          } else {
            let getVal = {};
            resolve(
              Promise.resolve(
                productImagesSerializer(JSON.parse(JSON.stringify(getVal))),
              ),
            );
          }
        } else reject(err);
      },
    );
  });
};

//
/*
objective: function to edit ProductImage
Input: ProductImageID in params and payload in body
Output: object of updated ProductImage
description: after query execution it will call the geProductImage function
*/
let editProductImage = (id, productImagesInfo) => {
  let productImage = makeProductImages(productImagesInfo);
  let productID = productImage.getProductID();
  let productImageURL = productImage.getProductImageURL();
  let insertQuery =
    "UPDATE product_images SET productID='" +
    productID +
    "',productImageURL='" +
    productImageURL +
    "' WHERE productImageID=" +
    id;
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getProductImage('productImageID', id));
      } else return error;
    });
  });
};

/*
objective: function to add subcategory
Input: payload of subCategory in body
Output: object of new created subCategory
description: after query execution it will call the getSubCategory function
*/
let addSubCategory = (subCategoryInfo) => {
  let subCategory = makeSubCategory(subCategoryInfo);
  scName = subCategory.getSubCategoryName();
  scDescription = subCategory.getSubCategoryDescription();
  categoryID = subCategory.getCategoryID();
  let insertQuery =
    "INSERT INTO subcategory SET subCategoryName='" +
    scName +
    "',subCategoryDescription='" +
    scDescription +
    "',categoryID='" +
    categoryID +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getSubCategory('subCategoryID', result.insertId));
      } else return error;
    });
  });
};

/*
objective: function to get all subcategories
Input: not required
Output: object of subcategory
description: after query execution it will Send the data to serializer
*/
let getSubCategories = () => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT * FROM subcategory',
      function (err, result, fields) {
        if (!err) {
          resolve(
            Promise.resolve(
              subCategorySerializer(JSON.parse(JSON.stringify(result))),
            ),
          );
        } else reject(err);
      },
    );
  });
};

/*
objective: function to get subcategory by categoryID
Input: subcategoryID in params.
Output: object of subcategory
description: after query execution it will Send the data to serializer
*/
let getSubCategory = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT * FROM subcategory WHERE subCategoryID=' + val,
      function (err, result, fields) {
        if (!err) {
          let getVal = {};
          if (result.length > 0) {
            getVal = {
              subCategoryID: result[0].subCategoryID,
              subCategoryName: result[0].subCategoryName,
              subCategoryDescription: result[0].subCategoryDescription,
              categoryID: result[0].categoryID,
              productID: result[0].productID,
            };
          } else {
            getVal = {};
          }

          resolve(
            Promise.resolve(
              subCategorySerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        } else reject(err);
      },
    );
  });
};

/*
objective: function to edit subcategory
Input: payload of subCategory in body and subCategoryID in params.
Output: object of updated subCategory
description: after query execution it will call the getSubCategory function
*/
let editSubCategory = (id, subCategoryInfo) => {
  let subCategory = makeSubCategory(subCategoryInfo);
  scName = subCategory.getSubCategoryName();
  scDescription = subCategory.getSubCategoryDescription();
  sccategoryID = subCategory.getCategoryID();
  let insertQuery =
    "UPDATE subcategory SET subCategoryName='" +
    scName +
    "',subCategoryDescription='" +
    scDescription +
    "',categoryID='" +
    sccategoryID +
    "' WHERE subCategoryID='" +
    id +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getSubCategory('categoryID', id));
      } else return error;
    });
  });
};

/*
objective: function to all items
Input: not required
Output: array of all items
description: after query execution it will Send the data to serializer
*/
let getItems = () => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT p.productID AS productIDD,  product_images.productID AS piPID, product_images.productImageID , product_images.productImageURL, i.*,  p.* , nutrition.*  FROM items AS i LEFT JOIN product AS p on p.productID=i.productID LEFT JOIN nutrition ON i.nutritionID=nutrition.nutritionID LEFT JOIN product_images on p.productID=product_images.productID';
    console.log(run_query);
    connection.query(run_query, function (err, result, fields) {
      // console.log(result)
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        if (get_ID != result[i].itemID) {
          get_ID = result[i].itemID;
          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (result[j].itemID == result[i].itemID) {
              var ob1 = new Object({
                productImageID: result[j].productImageID,
                productID: result[j].piPID,
                productImageURL: result[j].productImageURL,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            itemID: result[i].itemID,
            productID: result[i].productID,
            productName: result[i].productName,
            productDescription: result[i].productDescription,
            subCategoryID: result[i].subCategoryID,
            productBarcode: result[i].productBarcode,
            storeID: result[i].storeID,
            productPrice: result[i].productPrice,
            productDiscount: result[i].productDiscount,
            productDiscountedPrice: result[i].productDiscountedPrice,
            isFeatured: result[i].isFeatured,
            isOutOfStock: result[i].isOutOfStock,
            outOfStockDate: result[i].outOfStockDate,
            expDate: result[i].expDate,
            featuredDetails: result[i].featuredDetails,
            quantity: result[i].quantity,
            // "speciaIInstructions": result[i].speciaIInstructions,
            itemBarcode: result[i].itemBarcode,
            noOfImage: result[i].noOfImage,
            disclaimer: result[i].disclaimer,
            nutritionID: result[i].nutritionID,
            itemActive: result[i].itemActive,
            servingSize: result[i].servingSize,
            servingPerContainer: result[i].servingPerContainer,
            calories: result[i].calories,
            fatInGm: result[i].fatInGm,
            saturatedFatInGm: result[i].saturatedFatInGm,
            polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
            monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
            transFatInGm: result[i].transFatInGm,
            protienInGm: result[i].protienInGm,
            cholesterol: result[i].cholesterol,
            sodium: result[i].sodium,
            potassium: result[i].potassium,
            totalCarbs: result[i].totalCarbs,
            dietaryFiber: result[i].dietaryFiber,
            sugar: result[i].sugar,
            productImages: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(
        Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(arr1)))),
      );
    });
  });
};

/*
objective: function to add item
Input: payload of iten in body
Output: object of new item
description: after query execution it will call the getItem function
*/
let addItem = (itemInfo) => {
  let item = makeItem(itemInfo);
  let productID = item.getproductID();
  let storeID = item.getstoreID();
  let productPrice = item.getproductPrice();
  let productDiscount = item.getproductDiscount();
  let productDiscountedPrice = item.getproductDiscountedPrice();
  let isFeatured = item.getisFeatured();
  let isOutOfStock = item.getisOutOfStock();
  let outOfStockDate = item.getoutOfStockDate();
  let expDate = item.getexpDate();
  let featuredDetails = item.getfeaturedDetails();
  let quantity = item.getquantity();
  // let speciaIInstructions = item.getspeciaIInstructions()
  let itemBarcode = item.getitemBarcode();
  let noOfImage = item.getnoOfImage();
  let disclaimer = item.getdisclaimer();
  let nutritionID = item.getnutritionID();
  let itemActive = item.getitemActive();
  let insertQuery =
    'INSERT INTO items SET ' +
    'productID=' +
    "'" +
    productID +
    "'" +
    ',' +
    'storeID=' +
    "'" +
    storeID +
    "'" +
    ',' +
    'productPrice=' +
    "'" +
    productPrice +
    "'" +
    ',' +
    'productDiscount=' +
    "'" +
    productDiscount +
    "'" +
    ',' +
    'productDiscountedPrice=' +
    "'" +
    productDiscountedPrice +
    "'" +
    ',' +
    'isFeatured=' +
    "'" +
    isFeatured +
    "'" +
    ',' +
    'isOutOfStock=' +
    "'" +
    isOutOfStock +
    "'" +
    ',' +
    'outOfStockDate=' +
    "'" +
    outOfStockDate +
    "'" +
    ',' +
    'expDate=' +
    "'" +
    expDate +
    "'" +
    ',' +
    'featuredDetails=' +
    "'" +
    featuredDetails +
    "'" +
    ',' +
    'quantity=' +
    "'" +
    quantity +
    "'" +
    // "," + "speciaIInstructions=" + "'" + speciaIInstructions + "'" +
    ',' +
    'noOfImage=' +
    "'" +
    noOfImage +
    "'" +
    ',' +
    'disclaimer=' +
    "'" +
    disclaimer +
    "'" +
    ',' +
    'itemActive=' +
    "'" +
    itemActive +
    "'" +
    ',' +
    'nutritionID=' +
    "'" +
    nutritionID +
    "'" +
    ',' +
    'itemBarcode=' +
    "'" +
    itemBarcode +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getItem('itemID', result.insertId));
      } else return error;
    });
  });
};

/*
objective: function to edit item
Input: payload of item in body and item in params.
Output: object of updated item
description: after query execution it call getItem function
*/
let editItem = (id, itemInfo) => {
  console.log(itemInfo,"itemInfo");
  let item = makeItem(itemInfo);
  let productID = item.getproductID();
  let storeID = item.getstoreID();
  let productPrice = item.getproductPrice();
  let productDiscount = item.getproductDiscount();
  let productDiscountedPrice = item.getproductDiscountedPrice();
  let isFeatured = item.getisFeatured();
  let isOutOfStock = item.getisOutOfStock();
  let outOfStockDate = item.getoutOfStockDate();
  let expDate = item.getexpDate();
  let featuredDetails = item.getfeaturedDetails();
  let quantity = item.getquantity();
  // let speciaIInstructions = item.getspeciaIInstructions()
  let itemBarcode = item.getitemBarcode();
  let noOfImage = item.getnoOfImage();
  let disclaimer = item.getdisclaimer();
  let nutritionID = item.getnutritionID();
  let itemActive = item.getitemActive();
  let insertQuery =
    'UPDATE items SET ' +
    'productID=' +
    "'" +
    productID +
    "'" +
    ',' +
    'storeID=' +
    "'" +
    storeID +
    "'" +
    ',' +
    'productPrice=' +
    "'" +
    productPrice +
    "'" +
    ',' +
    'productDiscount=' +
    "'" +
    productDiscount +
    "'" +
    ',' +
    'productDiscountedPrice=' +
    "'" +
    productDiscountedPrice +
    "'" +
    ',' +
    'isFeatured=' +
    "'" +
    isFeatured +
    "'" +
    ',' +
    'isOutOfStock=' +
    "'" +
    isOutOfStock +
    "'" +
    ',' +
    'outOfStockDate=' +
    "'" +
    outOfStockDate +
    "'" +
    ',' +
    'expDate=' +
    "'" +
    expDate +
    "'" +
    ',' +
    'featuredDetails=' +
    "'" +
    featuredDetails +
    "'" +
    ',' +
    'quantity=' +
    "'" +
    quantity +
    "'" +
    // "," + "speciaIInstructions=" + "'" + speciaIInstructions + "'" +
    ',' +
    'noOfImage=' +
    "'" +
    noOfImage +
    "'" +
    ',' +
    'disclaimer=' +
    "'" +
    disclaimer +
    "'" +
    ',' +
    'itemActive=' +
    "'" +
    itemActive +
    "'" +
    ',' +
    'nutritionID=' +
    "'" +
    nutritionID +
    "'" +
    ',' +
    'itemBarcode=' +
    "'" +
    itemBarcode +
    "'" +
    " WHERE itemID='" +
    id +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getItem('itemID', id));
      } else return error;
    });
  });
};

/*
objective: function to get item by itemID
Input: itemID in params.
Output: object of item
description: after query execution it will Send the data to serializer
*/
let getItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT p.productID AS productIDD,  product_images.productID AS piPID, product_images.productImageID , product_images.productImageURL, i.*,  p.* , nutrition.*, sub_cate.*, cate.*  FROM items AS i LEFT JOIN product AS p on p.productID=i.productID LEFT JOIN nutrition ON i.nutritionID=nutrition.nutritionID LEFT JOIN product_images on p.productID=product_images.productID LEFT JOIN subCategory AS sub_cate ON sub_cate.subCategoryID=p.subCategoryID LEFT JOIN category AS cate ON cate.categoryID=sub_cate.categoryID WHERE i.itemID=' +
        val,
      function (err, result, fields) {
        if (!err) {
          if (result.length > 0) {
            let get_ID = 0;
            for (let i = 0; i < result.length; i++) {
              if (get_ID != result[i].productIDD) {
                get_ID = result[i].productIDD;
                var arr2 = new Array();
                for (let j = 0; j < result.length; j++) {
                  if (
                    get_ID == result[j].piPID &&
                    result[j].itemID == result[i].itemID
                  ) {
                    var ob1 = new Object({
                      productImageID: result[j].productImageID,
                      productID: result[j].piPID,
                      productImageURL: result[j].productImageURL,
                    });
                    arr2.push(ob1);
                  }
                }
                // console.log(result[i].productDiscountedPrice)
                var ob2 = new Object({
                  itemID: result[i].itemID,
                  productID: result[i].productID,
                  productName: result[i].productName,
                  productDescription: result[i].productDescription,
                  subCategoryID: result[i].subCategoryID,
                  categoryID: result[i].categoryID,
                  productBarcode: result[i].productBarcode,
                  storeID: result[i].storeID,
                  productPrice: result[i].productPrice,
                  productDiscount: result[i].productDiscount,
                  productDiscountedPrice: result[i].productDiscountedPrice,
                  isFeatured: result[i].isFeatured,
                  isOutOfStock: result[i].isOutOfStock,
                  outOfStockDate: result[i].outOfStockDate,
                  expDate: result[i].expDate,
                  featuredDetails: result[i].featuredDetails,
                  quantity: result[i].quantity,
                  // "speciaIInstructions": result[i].speciaIInstructions,
                  itemBarcode: result[i].itemBarcode,
                  noOfImage: result[i].noOfImage,
                  disclaimer: result[i].disclaimer,
                  nutritionID: result[i].nutritionID,
                  itemActive: result[i].itemActive,
                  servingSize: result[i].servingSize,
                  servingPerContainer: result[i].servingPerContainer,
                  calories: result[i].calories,
                  fatInGm: result[i].fatInGm,
                  saturatedFatInGm: result[i].saturatedFatInGm,
                  polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
                  monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
                  transFatInGm: result[i].transFatInGm,
                  protienInGm: result[i].protienInGm,
                  cholesterol: result[i].cholesterol,
                  sodium: result[i].sodium,
                  potassium: result[i].potassium,
                  totalCarbs: result[i].totalCarbs,
                  dietaryFiber: result[i].dietaryFiber,
                  sugar: result[i].sugar,
                  productImages: arr2,
                });
              }
            }

            resolve(
              Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(ob2)))),
            );
          } else {
            var getVal = new Array();
            resolve(
              Promise.resolve(
                itemsSerializer(JSON.parse(JSON.stringify(getVal))),
              ),
            );
          }
        } else reject(err);
      },
    );
  });
};

/*
objective: function to delete Item
Input:  itemID in params.
Output: empty object
description: after query execution it will call getItem fucntion
*/
let deleteItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query = "DELETE FROM items WHERE itemID='" + val + "'";
    connection.query(run_query, function (err, result, fields) {
      if (!err) {
        resolve(getItem('itemID', val));
      } else reject(err);
    });
  });
};

/*
objective: function to all items of a store
Input: storeID in params.
Output: array of items of selected store
description: after query execution it will Send the data to serializer
*/
let getStoreItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    // let run_query =
    //   "SELECT p.productID AS productIDD,  product_images.productID AS piPID, product_images.productImageID , product_images.productImageURL, i.*,  p.* , nutrition.*  FROM items AS i LEFT JOIN product AS p on p.productID=i.productID LEFT JOIN nutrition ON i.nutritionID=nutrition.nutritionID LEFT JOIN product_images on p.productID=product_images.productID  WHERE i.storeID='" +
    //   val +
    //   "'";
    let run_query =
    'SELECT p.productID AS productIDD,  product_images.productID AS piPID, product_images.productImageID , product_images.productImageURL, i.*,  p.* , nutrition.*, cate.*,sub_cate.* FROM items AS i LEFT JOIN product AS p on p.productID=i.productID LEFT JOIN nutrition ON i.nutritionID=nutrition.nutritionID LEFT JOIN product_images on p.productID=product_images.productID LEFT JOIN subCategory AS sub_cate ON sub_cate.subCategoryID=p.subCategoryID LEFT JOIN category AS cate ON cate.categoryID=sub_cate.categoryID  WHERE i.storeID=' +
    val;
    console.log(run_query, 'S');
    connection.query(run_query, function (err, result, fields) {
      // console.log(result)
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        // console.log(result[i].productIDD)
        if (get_ID != result[i].itemID) {
          get_ID = result[i].itemID;

          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (result[j].itemID == result[i].itemID) {
              var ob1 = new Object({
                productImageID: result[j].productImageID,
                productID: result[j].piPID,
                productImageURL: result[j].productImageURL,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            itemID: result[i].itemID,
            productID: result[i].productID,
            productName: result[i].productName,
            productDescription: result[i].productDescription,
            subCategoryID: result[i].subCategoryID,
            productBarcode: result[i].productBarcode,
            storeID: result[i].storeID,
            productPrice: result[i].productPrice,
            productDiscount: result[i].productDiscount,
            productDiscountedPrice: result[i].productDiscountedPrice,
            isFeatured: result[i].isFeatured,
            isOutOfStock: result[i].isOutOfStock,
            outOfStockDate: result[i].outOfStockDate,
            expDate: result[i].expDate,
            featuredDetails: result[i].featuredDetails,
            quantity: result[i].quantity,
            // "speciaIInstructions": result[i].speciaIInstructions,
            itemBarcode: result[i].itemBarcode,
            noOfImage: result[i].noOfImage,
            disclaimer: result[i].disclaimer,
            nutritionID: result[i].nutritionID,
            itemActive: result[i].itemActive,
            servingSize: result[i].servingSize,
            servingPerContainer: result[i].servingPerContainer,
            calories: result[i].calories,
            fatInGm: result[i].fatInGm,
            saturatedFatInGm: result[i].saturatedFatInGm,
            polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
            monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
            transFatInGm: result[i].transFatInGm,
            protienInGm: result[i].protienInGm,
            cholesterol: result[i].cholesterol,
            sodium: result[i].sodium,
            potassium: result[i].potassium,
            totalCarbs: result[i].totalCarbs,
            dietaryFiber: result[i].dietaryFiber,
            sugar: result[i].sugar,
            productImages: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(
        Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(arr1)))),
      );
    });
  });
};

/*
objective: function to items of store 
Input: storeID in params.
Output: array of items of selected store
description: after query execution it will Send the data to serializer
*/
let getStoreAllItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT p.productID AS productIDD,  product_images.productID AS piPID, product_images.productImageID , product_images.productImageURL, i.*,  p.* , nutrition.*, cate.*,sub_cate.* FROM items AS i LEFT JOIN product AS p on p.productID=i.productID LEFT JOIN nutrition ON i.nutritionID=nutrition.nutritionID LEFT JOIN product_images on p.productID=product_images.productID LEFT JOIN subCategory AS sub_cate ON sub_cate.subCategoryID=p.subCategoryID LEFT JOIN category AS cate ON cate.categoryID=sub_cate.categoryID  WHERE i.itemActive=true AND i.storeID=' +
      val;
    console.log(run_query);
    connection.query(run_query, function (err, result, fields) {
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        if (get_ID != result[i].itemID) {
          get_ID = result[i].itemID;
          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (result[j].itemID == result[i].itemID) {
              var ob1 = new Object({
                productImageID: result[j].productImageID,
                productID: result[j].piPID,
                productImageURL: result[j].productImageURL,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            itemID: result[i].itemID,
            productID: result[i].productID,
            productName: result[i].productName,
            productDescription: result[i].productDescription,
            subCategoryID: result[i].subCategoryID,
            categoryID: result[i].categoryID,
            subCategoryName: result[i].subCategoryName,
            categoryName: result[i].categoryName,
            productBarcode: result[i].productBarcode,
            storeID: result[i].storeID,
            productPrice: result[i].productPrice,
            productDiscountedPrice: result[i].productDiscountedPrice,
            productDiscount: result[i].productDiscount,
            isFeatured: result[i].isFeatured,
            isOutOfStock: result[i].isOutOfStock,
            outOfStockDate: result[i].outOfStockDate,
            expDate: result[i].expDate,
            featuredDetails: result[i].featuredDetails,
            quantity: result[i].quantity,
            // "speciaIInstructions": result[i].speciaIInstructions,
            itemBarcode: result[i].itemBarcode,
            noOfImage: result[i].noOfImage,
            disclaimer: result[i].disclaimer,
            nutritionID: result[i].nutritionID,
            itemActive: result[i].itemActive,
            servingSize: result[i].servingSize,
            servingPerContainer: result[i].servingPerContainer,
            calories: result[i].calories,
            fatInGm: result[i].fatInGm,
            saturatedFatInGm: result[i].saturatedFatInGm,
            polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
            monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
            transFatInGm: result[i].transFatInGm,
            protienInGm: result[i].protienInGm,
            cholesterol: result[i].cholesterol,
            sodium: result[i].sodium,
            potassium: result[i].potassium,
            totalCarbs: result[i].totalCarbs,
            dietaryFiber: result[i].dietaryFiber,
            sugar: result[i].sugar,
            productImages: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(
        Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(arr1)))),
      );
    });
  });
};

/*
objective: function to items of store 
Input: storeID in params.
Output: array of items of selected store
description: after query execution it will Send the data to serializer
*/
let getStoreAllNonFeatureItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT p.productID AS productIDD,  product_images.productID AS piPID, product_images.productImageID , product_images.productImageURL, i.*,  p.* , nutrition.*, cate.*,sub_cate.* FROM items AS i LEFT JOIN product AS p on p.productID=i.productID LEFT JOIN nutrition ON i.nutritionID=nutrition.nutritionID LEFT JOIN product_images on p.productID=product_images.productID LEFT JOIN subCategory AS sub_cate ON sub_cate.subCategoryID=p.subCategoryID LEFT JOIN category AS cate ON cate.categoryID=sub_cate.categoryID  WHERE i.itemActive=1 AND i.isFeatured=1 AND i.storeID=' +
      val;
    console.log(run_query);
    connection.query(run_query, function (err, result, fields) {
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        if (get_ID != result[i].itemID) {
          get_ID = result[i].itemID;
          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (result[j].itemID == result[i].itemID) {
              var ob1 = new Object({
                productImageID: result[j].productImageID,
                productID: result[j].piPID,
                productImageURL: result[j].productImageURL,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            itemID: result[i].itemID,
            productID: result[i].productID,
            productName: result[i].productName,
            productDescription: result[i].productDescription,
            subCategoryID: result[i].subCategoryID,
            categoryID: result[i].categoryID,
            subCategoryName: result[i].subCategoryName,
            categoryName: result[i].categoryName,
            productBarcode: result[i].productBarcode,
            storeID: result[i].storeID,
            productPrice: result[i].productPrice,
            productDiscountedPrice: result[i].productDiscountedPrice,
            productDiscount: result[i].productDiscount,
            isFeatured: result[i].isFeatured,
            isOutOfStock: result[i].isOutOfStock,
            outOfStockDate: result[i].outOfStockDate,
            expDate: result[i].expDate,
            featuredDetails: result[i].featuredDetails,
            quantity: result[i].quantity,
            // "speciaIInstructions": result[i].speciaIInstructions,
            itemBarcode: result[i].itemBarcode,
            noOfImage: result[i].noOfImage,
            disclaimer: result[i].disclaimer,
            nutritionID: result[i].nutritionID,
            itemActive: result[i].itemActive,
            servingSize: result[i].servingSize,
            servingPerContainer: result[i].servingPerContainer,
            calories: result[i].calories,
            fatInGm: result[i].fatInGm,
            saturatedFatInGm: result[i].saturatedFatInGm,
            polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
            monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
            transFatInGm: result[i].transFatInGm,
            protienInGm: result[i].protienInGm,
            cholesterol: result[i].cholesterol,
            sodium: result[i].sodium,
            potassium: result[i].potassium,
            totalCarbs: result[i].totalCarbs,
            dietaryFiber: result[i].dietaryFiber,
            sugar: result[i].sugar,
            productImages: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(
        Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(arr1)))),
      );
    });
  });
};

//new

/*
objective: function to get all items by category of store 
Input: storeID in params.
Output: array of items of selected store by category
description: after query execution it will dilter data and return
// */
let getItemCategories = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT *, product.subCategoryID AS productSubCategoryID, subcategory.subCategoryID AS subCategoryIDD FROM items LEFT JOIN product on product.productID=items.productID LEFT JOIN subCategory on subCategory.subCategoryID=product.subCategoryID WHERE items.itemActive=1 AND items.storeID=' +
      val +
      ' ORDER BY subcategory.subCategoryName ASC';

    connection.query(run_query, function (err, result, fields) {
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        if (get_ID != result[i].subCategoryIDD) {
          get_ID = result[i].subCategoryIDD;
          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (get_ID == result[j].productSubCategoryID) {
              var ob1 = new Object({
                itemID: result[j].itemID,
                productID: result[j].productID,
                storeID: result[j].storeID,
                productPrice: result[j].productPrice,
                productDiscount: result[j].productDiscount,
                productDiscountedPrice: result[i].productDiscountedPrice,
                isFeatured: result[j].isFeatured,
                isOutOfStock: result[j].isOutOfStock,
                expDate: result[j].expDate,
                featuredDetails: result[j].featuredDetails,
                // "speciaIInstructions": result[j].speciaIInstructions,
                discount: result[j].discount,
                itemBarcode: result[j].itemBarcode,
                noOfImage: result[j].noOfImage,
                disclaimer: result[j].disclaimer,
                nutritionID: result[j].nutritionID,
                itemActive: result[j].itemActive,
                quantity: result[j].quantity,
                productID: result[j].productID,
                productName: result[j].productName,
                productDescription: result[j].productDescription,
                subCategoryID: result[j].subCategoryID,
                productBarcode: result[j].productBarcode,
                subCategoryID: result[j].subCategoryID,
                subCategoryName: result[j].subCategoryName,
                subCategoryDescription: result[j].subCategoryDescription,
                categoryID: result[j].categoryID,
                subCategoryActive: result[j].subCategoryActive,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            subCategoryID: result[i].subCategoryIDD,
            subCategoryName: result[i].subCategoryName,
            itemsDetails: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(
        Promise.resolve(
          itemCategorySerializer(JSON.parse(JSON.stringify(arr1))),
        ),
      );
    });
  });
};

/*
objective: function to get all featured items
Input: storeID in params.
Output: array of all featured item of that store
description: after query execution it will Send the data to serializer
*/
let getFeaturedItem = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT p.productID AS productIDD,  product_images.productID AS piPID, product_images.productImageID , product_images.productImageURL, i.*,  p.* , nutrition.*  FROM items AS i LEFT JOIN product AS p on p.productID=i.productID LEFT JOIN nutrition ON i.nutritionID=nutrition.nutritionID LEFT JOIN product_images on p.productID=product_images.productID  WHERE i.storeID=' +
      val +
      ' AND i.itemActive=1 AND i.isFeatured=' +
      1;
    connection.query(run_query, function (err, result, fields) {
      var arr1 = new Array();
      let get_ID = 0;
      for (let i = 0; i < result.length; i++) {
        if (get_ID != result[i].itemID) {
          get_ID = result[i].itemID;
          var arr2 = new Array();
          for (let j = 0; j < result.length; j++) {
            if (result[j].itemID == result[i].itemID) {
              var ob1 = new Object({
                productImageID: result[j].productImageID,
                productID: result[j].piPID,
                productImageURL: result[j].productImageURL,
              });
              arr2.push(ob1);
            }
          }
          var ob2 = new Object({
            itemID: result[i].itemID,
            productID: result[i].productID,
            productName: result[i].productName,
            productDescription: result[i].productDescription,
            subCategoryID: result[i].subCategoryID,
            productBarcode: result[i].productBarcode,
            storeID: result[i].storeID,
            productPrice: result[i].productPrice,
            productDiscount: result[i].productDiscount,
            productDiscountedPrice: result[i].productDiscountedPrice,
            isFeatured: result[i].isFeatured,
            isOutOfStock: result[i].isOutOfStock,
            outOfStockDate: result[i].outOfStockDate,
            expDate: result[i].expDate,
            featuredDetails: result[i].featuredDetails,
            quantity: result[i].quantity,
            // "speciaIInstructions": result[i].speciaIInstructions,
            itemBarcode: result[i].itemBarcode,
            noOfImage: result[i].noOfImage,
            disclaimer: result[i].disclaimer,
            nutritionID: result[i].nutritionID,
            itemActive: result[i].itemActive,
            servingSize: result[i].servingSize,
            servingPerContainer: result[i].servingPerContainer,
            calories: result[i].calories,
            fatInGm: result[i].fatInGm,
            saturatedFatInGm: result[i].saturatedFatInGm,
            polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
            monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
            transFatInGm: result[i].transFatInGm,
            protienInGm: result[i].protienInGm,
            cholesterol: result[i].cholesterol,
            sodium: result[i].sodium,
            potassium: result[i].potassium,
            totalCarbs: result[i].totalCarbs,
            dietaryFiber: result[i].dietaryFiber,
            sugar: result[i].sugar,
            productImages: arr2,
          });
          arr1.push(ob2);
        }
      }

      resolve(
        Promise.resolve(itemsSerializer(JSON.parse(JSON.stringify(arr1)))),
      );
    });
  });
};

/*
objective: function to get favorite product
Input: favID in params.
Output: object of favourtite product
description: after query execution it will Send the data to serializer
*/
let getRef_prod_fav = (prop, val) => {
  return new Promise(function (resolve, reject) {
    let run_query =
      'SELECT ref_prod_fav.*, ref_prod_fav.itemID AS fItemID, items.*,  nutrition.*, product.*, store.*, location.* FROM ref_prod_fav LEFT JOIN items on ref_prod_fav.itemID=items.itemID LEFT JOIN  nutrition on  nutrition. nutritionID=items.nutritionID LEFT JOIN product on product.productID=items.productID LEFT JOIN store ON items.storeID =store.storeID LEFT JOIN location ON location.locationID=store.locationID WHERE favID=' +
      val;
    connection.query(run_query, function (err, result, fields) {
      if (!err) {
        let getVal = {};
        if (result.length > 0) {
          var storeDetail = new Object({
            storeID: result[0].storeID,
            storeName: result[0].storeName,
            emailAddress: result[0].emailAddress,
            storeTax: result[0].storeTax,
            companyID: result[0].companyID,
            messageFromStore: result[0].messageFromStore,
            orderCancellationPolicy: result[0].orderCancellationPolicy,
            aboutStore: result[0].aboutStore,
            termsAndConditions: result[0].termsAndConditions,
            isActive: result[0].isActive,
            startAcceptingTime: result[0].startAcceptingTime,
            storeContact: result[0].storeContact,
            imageURL: result[0].imageURL,
            logoURL: result[0].logoURL,
            endAcceptingTime: result[0].endAcceptingTime,
            minPickUpTime: result[0].minPickUpTime,
          });
          var storeLocationDetail = new Object({
            locationID: result[0].locationID,
            locationType: result[0].locationType,
            address1: result[0].address1,
            address2: result[0].address2,
            city: result[0].city,
            state: result[0].state,
            country: result[0].country,
            zipCode: result[0].zipCode,
            lat: result[0].lat,
            lng: result[0].lng,
          });
          // var productDetail=new Object({
          //   "productID": result[0].productID,
          //   "productName": result[0].productName,
          //   "productDescription": result[0].productDescription,
          //   "subCategoryID": result[0].subCategoryID,
          //   "productBarcode": result[0].productBarcode,
          // })
          // var itemDetail=new Object({
          //   "itemID": result[0].itemID,
          //   "productID": result[0].productID,
          //   "storeID": result[0].storeID,
          //   "productPrice": result[0].productPrice,
          //   "productDiscount": result[0].productDiscount,
          //   "isFeatured=": result[0].isFeatured,
          //   "isOutOfStock": result[0].isOutOfStock,
          //   "outOfStockDate": result[0].outOfStockDate,
          //   "expDate": result[0].expDate,
          //   "featuredDetails": result[0].featuredDetails,
          //   "quantity": result[0].quantity,
          //   "speciaIInstructions": result[0].speciaIInstruction,
          //   "discount": result[0].discount,
          //   "itemBarcode": result[0].itemBarcode,
          //   "nutritionFacts": result[0].nutritionFacts,
          //   "noOfImage": result[0].noOfImage,
          //   "disclaimer": result[0].disclaimer,
          //   "itemActive": result[0].itemActiv,
          // })
          // var nutritionDetail=new Object({
          //   "nutritionID": result[0].nutritionID,
          //   "servingSize": result[0].servingSize,
          //   "servingPerContainer": result[0].servingPerContainer,
          //   "calories": result[0].calories,
          //   "fatInGm": result[0].fatInGm,
          //   "saturatedFatInGm": result[0].saturatedFatInGm,
          //   "polyunsaturatedFatInGm": result[0].polyunsaturatedFatInGm,
          //   "monounsaturatedFatInGm": result[0].monounsaturatedFatInGm,
          //   "transFatInGm": result[0].transFatInGm,
          //   "protienInGm": result[0].protienInGm,
          //   "cholesterol": result[0].cholesterol,
          //   "sodium": result[0].sodium,
          //   "potassium": result[0].potassium,
          //   "totalCarbs": result[0].totalCarbs,
          //   "dietaryFiber": result[0].dietaryFiber,
          //   "sugar": result[0].sugar
          // })
          getVal = {
            favID: result[0].favID,
            userID: result[0].userID,
            itemID: result[0].fItemID,
            storeDetail: storeDetail,
            storeLocationDetail: storeLocationDetail,
            productID: result[0].productID,
            productName: result[0].productName,
            productDescription: result[0].productDescription,
            subCategoryID: result[0].subCategoryID,
            productBarcode: result[0].productBarcode,
            itemID: result[0].itemID,
            productID: result[0].productID,
            storeID: result[0].storeID,
            productPrice: result[0].productPrice,
            productDiscount: result[0].productDiscount,
            'isFeatured=': result[0].isFeatured,
            isOutOfStock: result[0].isOutOfStock,
            outOfStockDate: result[0].outOfStockDate,
            expDate: result[0].expDate,
            featuredDetails: result[0].featuredDetails,
            quantity: result[0].quantity,
            // "speciaIInstructions": result[0].speciaIInstruction,
            discount: result[0].discount,
            itemBarcode: result[0].itemBarcode,
            nutritionID: result[0].nutritionID,
            noOfImage: result[0].noOfImage,
            disclaimer: result[0].disclaimer,
            itemActive: result[0].itemActiv,
            nutritionID: result[0].nutritionID,
            servingSize: result[0].servingSize,
            servingPerContainer: result[0].servingPerContainer,
            calories: result[0].calories,
            fatInGm: result[0].fatInGm,
            saturatedFatInGm: result[0].saturatedFatInGm,
            polyunsaturatedFatInGm: result[0].polyunsaturatedFatInGm,
            monounsaturatedFatInGm: result[0].monounsaturatedFatInGm,
            transFatInGm: result[0].transFatInGm,
            protienInGm: result[0].protienInGm,
            cholesterol: result[0].cholesterol,
            sodium: result[0].sodium,
            potassium: result[0].potassium,
            totalCarbs: result[0].totalCarbs,
            dietaryFiber: result[0].dietaryFiber,
            sugar: result[0].sugar,
            // "productDetail": productDetail,
            // "itemDetail": itemDetail,
            // "nutritionDetail": nutritionDetail,
          };
        } else {
          getVal = {};
        }

        resolve(
          Promise.resolve(
            favouriteSerializer(JSON.parse(JSON.stringify(getVal))),
          ),
        );
      } else reject(err);
    });
  });
};

/*
objective: function to add favorite product
Input: payload of fav Detail in body
Output: object of new fav data
description: after query execution it will call getRef_prod_fav function
*/
let addRef_prod_fav = (favInfo) => {
  let favItem = makeFavItem(favInfo);
  let userID = favItem.getUserID();
  let itemID = favItem.getItemID();
  let insertQuery =
    'INSERT INTO ref_prod_fav SET userID=' +
    "'" +
    userID +
    "'" +
    ',' +
    'itemID=' +
    "'" +
    itemID +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getRef_prod_fav('favID', result.insertId));
      } else return error;
    });
  });
};

/*
objective: function to edit favorite product
Input: payload of fav detail in body and favID in params.
Output: object of fav data
description: after query execution it will call getRef_prod_fav
*/
let editRef_prod_fav = (id, favInfo) => {
  let favItem = makeFavItem(favInfo);
  let userID = favItem.getUserID();
  let itemID = favItem.getItemID();
  let insertQuery =
    'UPDATE ref_prod_fav SET userID=' +
    "'" +
    userID +
    "'" +
    ',' +
    'itemID=' +
    "'" +
    itemID +
    "' WHERE favID='" +
    id +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getRef_prod_fav('favID', id));
      } else return error;
    });
  });
};

/*
objective: function to delete favorite product
Input: favID in params.
Output: empty object
description: after query execution it will call getRef_prod_fav function
*/
let deleteRef_prod_fav = (prop, val) => {
  let insertQuery = "DELETE FROM ref_prod_fav  WHERE favID='" + val + "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(getRef_prod_fav('favID', val));
      } else return error;
    });
  });
};

//
/*
objective: function to get all favorite products of user
Input: userID in params.
Output: array of fav items of user
description: after query execution it will Send the data to serializer
*/
let userRef_prod_fav = (prop, val) => {
  let insertQuery =
    'SELECT * FROM ref_prod_fav LEFT JOIN items on ref_prod_fav.itemID = items.itemID LEFT JOIN product on product.productID = items.productID LEFT JOIN store on items.storeID = store.storeID LEFT JOIN nutrition on nutrition.nutritionID=items.nutritionID  LEFT JOIN location ON location.locationID=store.locationID where ref_prod_fav.userID=' +
    val;
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (err, result) => {
      if (!err) {
        var getVal = new Array();
        if (result.length > 0) {
          for (var i = 0; i < result.length; i++) {
            var storeDetail = new Object({
              storeID: result[i].storeID,
              storeName: result[i].storeName,
              emailAddress: result[i].emailAddress,
              storeTax: result[i].storeTax,
              companyID: result[i].companyID,
              messageFromStore: result[i].messageFromStore,
              orderCancellationPolicy: result[i].orderCancellationPolicy,
              aboutStore: result[i].aboutStore,
              termsAndConditions: result[i].termsAndConditions,
              isActive: result[i].isActive,
              startAcceptingTime: result[i].startAcceptingTime,
              storeContact: result[i].storeContact,
              imageURL: result[i].imageURL,
              logoURL: result[i].logoURL,
              endAcceptingTime: result[i].endAcceptingTime,
              minPickUpTime: result[i].minPickUpTime,
            });
            var storeLocationDetail = new Object({
              locationID: result[i].locationID,
              locationType: result[i].locationType,
              address1: result[i].address1,
              address2: result[i].address2,
              city: result[i].city,
              state: result[i].state,
              country: result[i].country,
              zipCode: result[i].zipCode,
              lat: result[i].lat,
              lng: result[i].lng,
            });
            // var productDetail=new Object({
            //   "productID": result[i].productID,
            //   "productName": result[i].productName,
            //   "productDescription": result[i].productDescription,
            //   "subCategoryID": result[i].subCategoryID,
            //   "productBarcode": result[i].productBarcode,
            // })
            // var itemDetail=new Object({
            //   "itemID": result[i].itemID,
            //   "productID": result[i].productID,
            //   "storeID": result[i].storeID,
            //   "productPrice": result[i].productPrice,
            //   "productDiscount": result[i].productDiscount,
            //   "isFeatured=": result[i].isFeatured,
            //   "isOutOfStock": result[i].isOutOfStock,
            //   "outOfStockDate": result[i].outOfStockDate,
            //   "expDate": result[i].expDate,
            //   "featuredDetails": result[i].featuredDetails,
            //   "quantity": result[i].quantity,
            //   "speciaIInstructions": result[i].speciaIInstruction,
            //   "discount": result[i].discount,
            //   "itemBarcode": result[i].itemBarcode,
            //   "nutritionFacts": result[i].nutritionFacts,
            //   "noOfImage": result[i].noOfImage,
            //   "disclaimer": result[i].disclaimer,
            //   "itemActive": result[i].itemActiv,
            // })
            // var nutritionDetail=new Object({
            //   "nutritionID": result[i].nutritionID,
            //   "servingSize": result[i].servingSize,
            //   "servingPerContainer": result[i].servingPerContainer,
            //   "calories": result[i].calories,
            //   "fatInGm": result[i].fatInGm,
            //   "saturatedFatInGm": result[i].saturatedFatInGm,
            //   "polyunsaturatedFatInGm": result[i].polyunsaturatedFatInGm,
            //   "monounsaturatedFatInGm": result[i].monounsaturatedFatInGm,
            //   "transFatInGm": result[i].transFatInGm,
            //   "protienInGm": result[i].protienInGm,
            //   "cholesterol": result[i].cholesterol,
            //   "sodium": result[i].sodium,
            //   "potassium": result[i].potassium,
            //   "totalCarbs": result[i].totalCarbs,
            //   "dietaryFiber": result[i].dietaryFiber,
            //   "sugar": result[i].sugar
            // })
            var obj = {
              favID: result[i].favID,
              userID: result[i].userID,
              itemID: result[i].itemID,
              storeDetail: storeDetail,
              storeLocationDetail: storeLocationDetail,
              productID: result[i].productID,
              productName: result[i].productName,
              productDescription: result[i].productDescription,
              subCategoryID: result[i].subCategoryID,
              productBarcode: result[i].productBarcode,
              itemID: result[i].itemID,
              productID: result[i].productID,
              storeID: result[i].storeID,
              productPrice: result[i].productPrice,
              productDiscount: result[i].productDiscount,
              'isFeatured=': result[i].isFeatured,
              isOutOfStock: result[i].isOutOfStock,
              outOfStockDate: result[i].outOfStockDate,
              expDate: result[i].expDate,
              featuredDetails: result[i].featuredDetails,
              quantity: result[i].quantity,
              // "speciaIInstructions": result[i].speciaIInstruction,
              discount: result[i].discount,
              itemBarcode: result[i].itemBarcode,
              nutritionID: result[i].nutritionID,
              noOfImage: result[i].noOfImage,
              disclaimer: result[i].disclaimer,
              itemActive: result[i].itemActiv,
              nutritionID: result[i].nutritionID,
              servingSize: result[i].servingSize,
              servingPerContainer: result[i].servingPerContainer,
              calories: result[i].calories,
              fatInGm: result[i].fatInGm,
              saturatedFatInGm: result[i].saturatedFatInGm,
              polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
              monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
              transFatInGm: result[i].transFatInGm,
              protienInGm: result[i].protienInGm,
              cholesterol: result[i].cholesterol,
              sodium: result[i].sodium,
              potassium: result[i].potassium,
              totalCarbs: result[i].totalCarbs,
              dietaryFiber: result[i].dietaryFiber,
              sugar: result[i].sugar,
              // "productDetail": productDetail,
              // "itemDetail": itemDetail,
              // "nutritionDetail": nutritionDetail,
            };
            getVal.push(obj);
          }

          resolve(
            Promise.resolve(
              favouriteSerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        } else {
          getVal = {};
          resolve(
            Promise.resolve(
              favouriteSerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        }
      } else reject(err);
    });
  });
};

/*
objective: function to get all favorite items of user of single store
Input: userID and productID in params.
Output: array of fav items of user of specific store
description: after query execution it will Send the data to serializer
*/
let userStoreRef_prod_fav = (prop, val, prop2, val2) => {
  let insertQuery =
    'SELECT * FROM ref_prod_fav LEFT JOIN items on ref_prod_fav.itemID = items.itemID LEFT JOIN product on product.productID = items.productID LEFT JOIN nutrition on nutrition.nutritionID=items.nutritionID LEFT JOIN store on items.storeID = store.storeID  LEFT JOIN location ON location.locationID=store.locationID where ref_prod_fav.userID=' +
    val +
    ' AND items.storeID=' +
    val2;
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (err, result) => {
      if (!err) {
        var getVal = new Array();
        if (result.length > 0) {
          for (var i = 0; i < result.length; i++) {
            var storeDetail = new Object({
              storeID: result[i].storeID,
              storeName: result[i].storeName,
              emailAddress: result[i].emailAddress,
              storeTax: result[i].storeTax,
              companyID: result[i].companyID,
              messageFromStore: result[i].messageFromStore,
              orderCancellationPolicy: result[i].orderCancellationPolicy,
              aboutStore: result[i].aboutStore,
              termsAndConditions: result[i].termsAndConditions,
              isActive: result[i].isActive,
              startAcceptingTime: result[i].startAcceptingTime,
              storeContact: result[i].storeContact,
              imageURL: result[i].imageURL,
              logoURL: result[i].logoURL,
              endAcceptingTime: result[i].endAcceptingTime,
              minPickUpTime: result[i].minPickUpTime,
            });
            var storeLocationDetail = new Object({
              locationID: result[i].locationID,
              locationType: result[i].locationType,
              address1: result[i].address1,
              address2: result[i].address2,
              city: result[i].city,
              state: result[i].state,
              country: result[i].country,
              zipCode: result[i].zipCode,
              lat: result[i].lat,
              lng: result[i].lng,
            });
            // var productDetail=new Object({
            //   "productID": result[i].productID,
            //   "productName": result[i].productName,
            //   "productDescription": result[i].productDescription,
            //   "subCategoryID": result[i].subCategoryID,
            //   "productBarcode": result[i].productBarcode,
            // })
            // var itemDetail=new Object({
            //   "itemID": result[i].itemID,
            //   "productID": result[i].productID,
            //   "storeID": result[i].storeID,
            //   "productPrice": result[i].productPrice,
            //   "productDiscount": result[i].productDiscount,
            //   "isFeatured=": result[i].isFeatured,
            //   "isOutOfStock": result[i].isOutOfStock,
            //   "outOfStockDate": result[i].outOfStockDate,
            //   "expDate": result[i].expDate,
            //   "featuredDetails": result[i].featuredDetails,
            //   "quantity": result[i].quantity,
            //   "speciaIInstructions": result[i].speciaIInstruction,
            //   "discount": result[i].discount,
            //   "itemBarcode": result[i].itemBarcode,
            //   "nutritionFacts": result[i].nutritionFacts,
            //   "noOfImage": result[i].noOfImage,
            //   "disclaimer": result[i].disclaimer,
            //   "itemActive": result[i].itemActiv,
            // })
            // var nutritionDetail=new Object({
            //   "nutritionID": result[i].nutritionID,
            //   "servingSize": result[i].servingSize,
            //   "servingPerContainer": result[i].servingPerContainer,
            //   "calories": result[i].calories,
            //   "fatInGm": result[i].fatInGm,
            //   "saturatedFatInGm": result[i].saturatedFatInGm,
            //   "polyunsaturatedFatInGm": result[i].polyunsaturatedFatInGm,
            //   "monounsaturatedFatInGm": result[i].monounsaturatedFatInGm,
            //   "transFatInGm": result[i].transFatInGm,
            //   "protienInGm": result[i].protienInGm,
            //   "cholesterol": result[i].cholesterol,
            //   "sodium": result[i].sodium,
            //   "potassium": result[i].potassium,
            //   "totalCarbs": result[i].totalCarbs,
            //   "dietaryFiber": result[i].dietaryFiber,
            //   "sugar": result[i].sugar
            // })
            var obj = {
              favID: result[i].favID,
              userID: result[i].userID,
              itemID: result[i].itemID,
              storeDetail: storeDetail,
              storeLocationDetail: storeLocationDetail,
              productID: result[i].productID,
              productName: result[i].productName,
              productDescription: result[i].productDescription,
              subCategoryID: result[i].subCategoryID,
              productBarcode: result[i].productBarcode,
              itemID: result[i].itemID,
              productID: result[i].productID,
              storeID: result[i].storeID,
              productPrice: result[i].productPrice,
              productDiscount: result[i].productDiscount,
              'isFeatured=': result[i].isFeatured,
              isOutOfStock: result[i].isOutOfStock,
              outOfStockDate: result[i].outOfStockDate,
              expDate: result[i].expDate,
              featuredDetails: result[i].featuredDetails,
              quantity: result[i].quantity,
              // "speciaIInstructions": result[i].speciaIInstruction,
              discount: result[i].discount,
              itemBarcode: result[i].itemBarcode,
              nutritionID: result[i].nutritionID,
              noOfImage: result[i].noOfImage,
              disclaimer: result[i].disclaimer,
              itemActive: result[i].itemActiv,
              nutritionID: result[i].nutritionID,
              servingSize: result[i].servingSize,
              servingPerContainer: result[i].servingPerContainer,
              calories: result[i].calories,
              fatInGm: result[i].fatInGm,
              saturatedFatInGm: result[i].saturatedFatInGm,
              polyunsaturatedFatInGm: result[i].polyunsaturatedFatInGm,
              monounsaturatedFatInGm: result[i].monounsaturatedFatInGm,
              transFatInGm: result[i].transFatInGm,
              protienInGm: result[i].protienInGm,
              cholesterol: result[i].cholesterol,
              sodium: result[i].sodium,
              potassium: result[i].potassium,
              totalCarbs: result[i].totalCarbs,
              dietaryFiber: result[i].dietaryFiber,
              sugar: result[i].sugar,
              // "productDetail": productDetail,
              // "itemDetail": itemDetail,
              // "nutritionDetail": nutritionDetail,
            };
            getVal.push(obj);
          }

          resolve(
            Promise.resolve(
              favouriteSerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        } else {
          getVal = {};
          resolve(
            Promise.resolve(
              favouriteSerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        }
      } else reject(err);
    });
  });
};

/*
objective: function to get nutritions
Input: nutritionID in params.
Output: object of nutritions
description: after query execution it will Send the data to serializer
*/
let get_nutrition = (prop, val) => {
  return new Promise(function (resolve, reject) {
    connection.query(
      'SELECT * FROM nutrition WHERE nutritionID=' + val,
      function (err, result, fields) {
        if (!err) {
          let getVal = {};
          if (result.length > 0) {
            getVal = {
              nutritionID: result[0].nutritionID,
              servingSize: result[0].servingSize,
              servingPerContainer: result[0].servingPerContainer,
              calories: result[0].calories,
              fatInGm: result[0].fatInGm,
              saturatedFatInGm: result[0].saturatedFatInGm,
              polyunsaturatedFatInGm: result[0].polyunsaturatedFatInGm,
              monounsaturatedFatInGm: result[0].monounsaturatedFatInGm,
              transFatInGm: result[0].transFatInGm,
              protienInGm: result[0].protienInGm,
              cholesterol: result[0].cholesterol,
              sodium: result[0].sodium,
              potassium: result[0].potassium,
              totalCarbs: result[0].totalCarbs,
              dietaryFiber: result[0].dietaryFiber,
              sugar: result[0].sugar,
            };
          } else {
            getVal = {};
          }

          resolve(
            Promise.resolve(
              nutritionSerializer(JSON.parse(JSON.stringify(getVal))),
            ),
          );
        } else reject(err);
      },
    );
  });
};

/*
objective: function to add nutritions
Input: payload of nutrition in body
Output: object of new nutrition
description: after query execution it will call get_nutrition  function
*/
let add_nutrition = (nutritionInfo) => {
  console.log(nutritionInfo,"S");
  let nutritions = makeNutrition(nutritionInfo);
  let servingSize = nutritions.servingSize();
  let servingPerContainer = nutritions.servingPerContainer();
  let calories = nutritions.calories();
  let fatInGm = nutritions.fatInGm();
  let saturatedFatInGm = nutritions.saturatedFatInGm();
  let polyunsaturatedFatInGm = nutritions.polyunsaturatedFatInGm();
  let monounsaturatedFatInGm = nutritions.monounsaturatedFatInGm();
  let transFatInGm = nutritions.transFatInGm();
  let protienInGm = nutritions.protienInGm();
  let cholesterol = nutritions.cholesterol();
  let sodium = nutritions.sodium();
  let potassium = nutritions.potassium();
  let totalCarbs = nutritions.totalCarbs();
  let dietaryFiber = nutritions.dietaryFiber();
  let sugar = nutritions.sugar();

  let insertQuery =
    "INSERT INTO nutrition SET servingSize='" +
    servingSize +
    "',servingPerContainer='" +
    servingPerContainer +
    "',calories='" +
    calories +
    "',fatInGm='" +
    fatInGm +
    "',saturatedFatInGm='" +
    saturatedFatInGm +
    "',polyunsaturatedFatInGm='" +
    polyunsaturatedFatInGm +
    "',monounsaturatedFatInGm='" +
    monounsaturatedFatInGm +
    "',transFatInGm='" +
    transFatInGm +
    "',protienInGm='" +
    protienInGm +
    "',cholesterol='" +
    cholesterol +
    "',sodium='" +
    sodium +
    "',potassium='" +
    potassium +
    "',totalCarbs='" +
    totalCarbs +
    "',dietaryFiber='" +
    dietaryFiber +
    "',sugar='" +
    sugar +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(get_nutrition('nutritionID', result.insertId));
      } else return error;
    });
  });
};

/*
objective: function to edit nutrition
Input: payload of nutrition in body and nutritionID in params.
Output: object of updated nutrition
description: after query execution it will call get_nutrition function
*/
let edit_nutrition = (id, transProdInfo) => {
  let nutritions = makeNutrition(transProdInfo);

  // let nutritionID = nutritions.nutritionID()
  let servingSize = nutritions.servingSize();
  let servingPerContainer = nutritions.servingPerContainer();
  let calories = nutritions.calories();
  let fatInGm = nutritions.fatInGm();
  let saturatedFatInGm = nutritions.saturatedFatInGm();
  let polyunsaturatedFatInGm = nutritions.polyunsaturatedFatInGm();
  let monounsaturatedFatInGm = nutritions.monounsaturatedFatInGm();
  let transFatInGm = nutritions.transFatInGm();
  let protienInGm = nutritions.protienInGm();
  let cholesterol = nutritions.cholesterol();
  let sodium = nutritions.sodium();
  let potassium = nutritions.potassium();
  let totalCarbs = nutritions.totalCarbs();
  let dietaryFiber = nutritions.dietaryFiber();
  let sugar = nutritions.sugar();

  let insertQuery =
    "UPDATE nutrition SET servingSize='" +
    servingSize +
    "',servingPerContainer='" +
    servingPerContainer +
    "',calories='" +
    calories +
    "',fatInGm='" +
    fatInGm +
    "',saturatedFatInGm='" +
    saturatedFatInGm +
    "',polyunsaturatedFatInGm='" +
    polyunsaturatedFatInGm +
    "',monounsaturatedFatInGm='" +
    monounsaturatedFatInGm +
    "',transFatInGm='" +
    transFatInGm +
    "',protienInGm='" +
    protienInGm +
    "',cholesterol='" +
    cholesterol +
    "',sodium='" +
    sodium +
    "',potassium='" +
    potassium +
    "',totalCarbs='" +
    totalCarbs +
    "',dietaryFiber='" +
    dietaryFiber +
    "',sugar='" +
    sugar +
    "' WHERE nutritionID='" +
    id +
    "'";
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(get_nutrition('nutritionID', id));
      } else return error;
    });
  });
};

/*
objective: function to delete nutrition
Input: nutritionID in params.
Output: empty array
description: after query execution it will call get_nutrition function
*/
let delete_nutrition = (prop, val) => {
  let insertQuery = 'DELETE FROM nutrition WHERE nutritionID=' + val;
  return new Promise(function (resolve, reject) {
    connection.query(insertQuery, (error, result) => {
      if (!error) {
        resolve(get_nutrition('nutritionID', val));
      } else return error;
    });
  });
};

// exporting all the functions/methods from this file
module.exports = {
  listproducts,
  findProduct,
  addProduct,
  editProduct,
  addCategory,
  getCategories,
  getCategory,
  editCategory,
  addProductImage,
  getProductImages,
  getProductImage,
  getProductImagesByProductID,
  editProductImage,
  addSubCategory,
  getSubCategories,
  getSubCategory,
  editSubCategory,
  getItems,
  getItemCategories,
  addItem,
  editItem,
  getItem,
  deleteItem,
  getStoreItem,
  getStoreAllItem,
  getStoreAllNonFeatureItem,
  getFeaturedItem,
  getRef_prod_fav,
  addRef_prod_fav,
  editRef_prod_fav,
  deleteRef_prod_fav,
  userRef_prod_fav,
  userStoreRef_prod_fav,
  get_nutrition,
  add_nutrition,
  edit_nutrition,
  delete_nutrition,
};
