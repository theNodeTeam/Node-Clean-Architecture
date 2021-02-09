/*
    name: CATEGORY SERIALIZER
    path: data-access/product-db/mysql/favouriteSerializer.js
    Objective: In this file we have the mapping of database fields to our own created field names. This serialzer return the data to frontend. 
    next File: serializer > index
*/

// this function maps the field of database to our fields
const _serializeSingle = (item) => {
  console.log("ii",item);
    return {
      'favID': item.favID,
      'userID': item.userID,
      'itemID': item.itemID,
      'itemDetail': item.itemDetail,
      'storeDetail': item.storeDetail,
      'storeLocationDetail': item.storeLocationDetail,
      'productDetail': item.productDetail,
      'nutritionDetail': item.nutritionDetail,

      'productID': item.productID,
      'productName': item.productName,
      'productDescription': item.productDescription,
      'subCategoryID': item.subCategoryID,
      'productBarcode': item.productBarcode,
      'productPrice': item.productPrice,
      'productDiscount': item.productDiscount,
      'storeID': item.storeID,
      'storeName': item.storeName,
      'emailAddress': item.emailAddress,
      'storeTax': item.storeTax,
      'companyID': item.companyID,
      'messageFromStore': item.messageFromStore,
      'orderCancellationPolicy': item.orderCancellationPolicy,
      'aboutStore': item.aboutStore,
      'termsAndConditions': item.termsAndConditions,
      'isActive': item.isActive,
      'startAcceptingTime': item.startAcceptingTime,
      'storeContact': item.storeContact,
      'imageURL': item.imageURL,
      'logoURL': item.logoURL,
      'endAcceptingTime': item.endAcceptingTime,
      'minPickUpTime': item.minPickUpTime,      
      'isFeatured': item.isFeatured,
      'isOutOfStock': item.isOutOfStock,
      'outOfStockDate': item.outOfStockDate,
      'expDate': item.expDate,
      'featuredDetails': item.featuredDetails,
      'quantity': item.quantity,
      'speciaIInstructions': item.porductSpeciaIInstructions,
      'itemBarcode': item.itemBarcode,
      'noOfImage': item.noOfImage,
      'disclaimer': item.disclaimer,
      'nutritionID': item.nutritionID,
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
  
