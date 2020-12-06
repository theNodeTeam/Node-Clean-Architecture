/*
    name: PRODUCT MAKER
    path: models/product/product.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
    next File: product > product-schema
*/


let buildMakeProduct = function(productValidator) {
  return ({
    productName,
    productDescription,
    subCategoryID,
    productBarcode,
    imageURL
  } = {}) => {
    let {error} = productValidator({productName, productDescription, subCategoryID, productBarcode})
    if (error) throw new Error(error)

    return {
      getProductName: () => productName,
      getProductDescription: () => productDescription,
      getSubCategoryID: () => subCategoryID,
      getProductBarcode: () => productBarcode,
      getImageURL: () => imageURL
    }
  }
}

module.exports = buildMakeProduct