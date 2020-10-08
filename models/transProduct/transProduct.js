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