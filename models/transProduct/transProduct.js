/*
    name: TRABS_PRODUCT MAKER
    path: models/transProduct/transProduct.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
    next File: transProduct > transProduct-schema
*/

let buildMakeFavItem = function(favItemValidator) {
  return ({
    orderID,
    itemID,
    itemQuantity
  } = {}) => {
    let {error} = favItemValidator({orderID, itemID, itemQuantity})
    if (error) throw new Error(error)

    return {
      getOrderID: () => orderID,
      getItemID: () => itemID,
      getItemQuantity: () => itemQuantity

    }
  }
}

module.exports = buildMakeFavItem