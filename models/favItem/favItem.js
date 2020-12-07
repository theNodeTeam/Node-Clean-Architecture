/*
    name: FAV_ITEM MAKER
    path: models/favItem/favItem.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
    next File: favItem > favItem-schema
*/

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