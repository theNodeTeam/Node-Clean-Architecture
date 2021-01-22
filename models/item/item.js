/*
    name: ITEM MAKER
    path: models/item/item.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
    next File: item > item-schema
*/


let buildMakeItem = function(itemValidator) {
  return ({
    productID,
    storeID,
    productPrice,
    productDiscount,
    productDiscountedPrice,
    isFeatured,
    isOutOfStock,
    outOfStockDate,
    expDate,
    featuredDetails,
    quantity,
    // speciaIInstructions,
    // discount,
    itemBarcode,
    noOfImage,
    disclaimer,
    nutritionID,
    itemActive
  } = {}) => {
    let {error} = itemValidator({
      productID,
      storeID,
      productPrice,
      productDiscount,
      productDiscountedPrice,
      isFeatured,
      isOutOfStock,
      outOfStockDate,
      expDate,
      featuredDetails,
      quantity,
      // speciaIInstructions,
      // discount,
      itemBarcode,
      noOfImage,
      disclaimer,
      nutritionID,
      itemActive
    })
    if (error) throw new Error(error)

    return {
      getproductID: () => productID,
      getstoreID: () => storeID,
      getproductPrice: () =>productPrice,
      getproductDiscount: () => productDiscount,
      getproductDiscountedPrice: () => productDiscountedPrice,
      getisFeatured: () => isFeatured,
      getisOutOfStock: () => isOutOfStock,
      getoutOfStockDate: () => outOfStockDate,
      getexpDate: () => expDate,
      getfeaturedDetails: () => featuredDetails,
      getquantity: () => quantity,
      // getspeciaIInstructions: () => speciaIInstructions,
      getitemBarcode: () => itemBarcode,
      getnoOfImage: () => noOfImage,
      getdisclaimer: () => disclaimer,
      getnutritionID: () => nutritionID,
      getitemActive: () => itemActive
    }
  }
}

module.exports = buildMakeItem