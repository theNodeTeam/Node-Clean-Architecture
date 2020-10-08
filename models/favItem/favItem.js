let buildMakeFavItem = function(favItemValidator) {
  return ({
    userID,
    itemID
  } = {}) => {
    let {error} = favItemValidator({userID, itemID})
    if (error) throw new Error(error)

    return {
      getUserID: () => userID,
      getItemID: () => itemID
    }
  }
}

module.exports = buildMakeFavItem