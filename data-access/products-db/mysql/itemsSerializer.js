const _serializeSingle = (item) => {
    return {
      'productID': item.productID,
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
      'servingSize': nutrition.servingSize,
      'servingPerContainer': nutrition.servingPerContainer,
      'calories': nutrition.calories,
      'fatInGm': nutrition.fatInGm,
      'saturatedFatInGm': nutrition.saturatedFatInGm,
      'polyunsaturatedFatInGm': nutrition.polyunsaturatedFatInGm,
      'monounsaturatedFatInGm': nutrition.monounsaturatedFatInGm,
      'transFatInGm': nutrition.transFatInGm,
      'protienInGm': nutrition.protienInGm,
      'cholesterol': nutrition.cholesterol,
      'sodium': nutrition.sodium,
      'potassium': nutrition.potassium,
      'totalCarbs': nutrition.totalCarbs,
      'dietaryFiber': nutrition.dietaryFiber,
      'sugar': nutrition.sugar

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
  