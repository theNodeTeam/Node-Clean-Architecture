const _serializeSingle = (item) => {
    return {
      'itemID': item.itemID,
      'productID': item.productID,
      'productName': item.productName,
      'productDescription': item.productDescription,
      'productType': item.productType,
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
      'discount': item.discount,
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
  
  const serializer = (data) => { 
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
  }
  
  module.exports = serializer
  