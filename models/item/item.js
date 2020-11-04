/*
    name: ITEM MAKER
    path: models/item/item.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
*/


let buildMakeItem = function(itemValidator) {
  return ({
    productID,
    storeID,
    productPrice,
    productDiscount,
    isFeatured,
    isOutOfStock,
    outOfStockDate,
    expDate,
    featuredDetails,
    quantity,
    speciaIInstructions,
    discount,
    itemBarcode,
    noOfImage,
    disclaimer,
    nutritionFacts,
    itemActive
  } = {}) => {
    let {error} = itemValidator({
      productID,
      storeID,
      productPrice,
      productDiscount,
      isFeatured,
      isOutOfStock,
      outOfStockDate,
      expDate,
      featuredDetails,
      quantity,
      speciaIInstructions,
      discount,
      itemBarcode,
      noOfImage,
      disclaimer,
      nutritionFacts,
      itemActive
    })
    if (error) throw new Error(error)

    return {
      getproductID: () => productID,
      getstoreID: () => storeID,
      getproductPrice: () =>productPrice,
      getproductDiscount: () => productDiscount,
      getisFeatured: () => isFeatured,
      getisOutOfStock: () => isOutOfStock,
      getoutOfStockDate: () => outOfStockDate,
      getexpDate: () => expDate,
      getfeaturedDetails: () => featuredDetails,
      getquantity: () => quantity,
      getspeciaIInstructions: () => speciaIInstructions,
      getdiscount: () => discount,
      getitemBarcode: () => itemBarcode,
      getnoOfImage: () => noOfImage,
      getdisclaimer: () => disclaimer,
      getnutritionFacts: () => nutritionFacts,
      getitemActive: () => itemActive
    }
  }
}

module.exports = buildMakeItem