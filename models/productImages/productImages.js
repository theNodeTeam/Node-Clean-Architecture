/*
    name: Product Images
    path: models/ProductImages/ProductImages.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
    next File: ProductImages > ProductImages-schema
*/

let buildMakeProductImages = function(productImagesValidator) {
  return ({
    productID,
    productImageURL
  } = {}) => {
    let {error} = productImagesValidator({productID, productImageURL})
    if (error) throw new Error(error)

    return {
      getProductID: () => productID,
      getProductImageURL: () => productImageURL
    }
  }
}

module.exports = buildMakeProductImages