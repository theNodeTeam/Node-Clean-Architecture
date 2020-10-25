let buildMakeNutrition = function(nutritionValidator) {
  return ({
    nutritionID,
    servingSize,
    servingPerContainer,
    calories,
    fatInGm,
    saturatedFatInGm,
    polyunsaturatedFatInGm,
    monounsaturatedFatInGm,
    transFatInGm,
    protienInGm,
    cholesterol,
    sodium,
    potassium,
    totalCarbs,
    dietaryFiber,
    sugar
  } = {}) => {
    let {error} = nutritionValidator({
      nutritionID,
      servingSize,
      servingPerContainer,
      calories,
      fatInGm,
      saturatedFatInGm,
      polyunsaturatedFatInGm,
      monounsaturatedFatInGm,
      transFatInGm,
      protienInGm,
      cholesterol,
      sodium,
      potassium,
      totalCarbs,
      dietaryFiber,
      sugar
    })
    if (error) throw new Error(error)

    return {
      nutritionID: () => nutritionID,
      servingSize: () => servingSize,
      servingPerContainer: () => servingPerContainer,
      calories: () => calories,
      fatInGm: () => fatInGm,
      saturatedFatInGm: () => saturatedFatInGm,
      polyunsaturatedFatInGm: () => polyunsaturatedFatInGm,
      monounsaturatedFatInGm: () => monounsaturatedFatInGm,
      transFatInGm: () => transFatInGm,
      protienInGm: () => protienInGm,
      cholesterol: () => cholesterol,
      sodium: () => sodium,
      potassium: () => potassium,
      totalCarbs: () => totalCarbs,
      dietaryFiber: () => dietaryFiber,
      sugar: () => sugar
    }
  }
}

module.exports = buildMakeNutrition