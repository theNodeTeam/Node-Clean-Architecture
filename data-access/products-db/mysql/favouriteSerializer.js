/*
    name: CATEGORY SERIALIZER
    path: data-access/product-db/mysql/favouriteSerializer.js
    Objective: In this file we have the mapping of database fields to our own created field names. This serialzer return the data to frontend. 
    next File: serializer > index
*/

// this function maps the field of database to our fields
const _serializeSingle = (item) => {
    return {
      'favID': item.favID,
      'userID': item.userID,
      'itemID': item.itemID,
      'productID': item.productID,
      'productName': item.productName,
      'productDescription': item.productDescription,
      'subCategoryID': item.subCategoryID,
      'productBarcode': item.productBarcode,
      'storeID': item.storeID,
      'productPrice': item.productPrice,
      'productDiscount': item.productDiscount,
      'isFeatured': item.isFeatured,
      'isOutOfStock': item.isOutOfStock,
      'outOfStockDate': item.outOfStockDate,
      'expDate': item.expDate,
      'featuredDetails': item.featuredDetails,
      'quantity': item.quantity,
      'speciaIInstructions': item.speciaIInstructions,
      'itemBarcode': item.itemBarcode,
      'noOfImage': item.noOfImage,
      'disclaimer': item.disclaimer,
      'nutritionFacts': item.nutritionFacts,
      'itemActive': item.itemActive,
      'servingSize': item.servingSize,
      'servingPerContainer': item.servingPerContainer,
      'calories': item.calories,
      'fatInGm': item.fatInGm,
      'saturatedFatInGm': item.saturatedFatInGm,
      'polyunsaturatedFatInGm': item.polyunsaturatedFatInGm,
      'monounsaturatedFatInGm': item.monounsaturatedFatInGm,
      'transFatInGm': item.transFatInGm,
      'protienInGm': item.protienInGm,
      'cholesterol': item.cholesterol,
      'sodium': item.sodium,
      'potassium': item.potassium,
      'totalCarbs': item.totalCarbs,
      'dietaryFiber': item.dietaryFiber,
      'sugar': item.sugar

    };
  };

// this function check the data if it is array it iterate the else it send the data to _serializeSingle for mapping.
const serializer = (data) => { 
  if (!data || isEmpty(data)) {
    return {err: "No record found!"}
  }
  if (Array.isArray(data)) {
    return data.map(_serializeSingle)
  }
  return _serializeSingle(data)
}

//to check whether the object is empty or not
function isEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }

  return true;
}

  
  module.exports = serializer
  