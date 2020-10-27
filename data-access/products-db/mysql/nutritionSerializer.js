const _serializeSingle = (nutrition) => {
    return {
      'nutritionID': nutrition.nutritionID,
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
  