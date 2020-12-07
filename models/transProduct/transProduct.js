/*
    name: TRABS_PRODUCT MAKER
    path: models/transProduct/transProduct.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
    next File: transProduct > transProduct-schema
*/

let buildMakeFavItem = function(favItemValidator) {
  return ({
    orderNumber,
    itemID,
    itemQuantity,
    salePrice,
    saleDiscount
  } = {}) => {
    let {error} = favItemValidator({orderNumber, itemID, itemQuantity, salePrice, saleDiscount})
    if (error) throw new Error(error)

    return {
      getOrderNumber: () => orderNumber,
      getItemID: () => itemID,
      getItemQuantity: () => itemQuantity,
      getSalePrice: () => salePrice,
      getSaleDiscount: () => saleDiscount,

    }
  }
}

module.exports = buildMakeFavItem