/*
    name: CATEGORY MAKER
    path: models/category/category.js
    Objective: In this we make the getter of validated data, if there is any error it return the error
    next File: category > category-schema
*/

let buildMakeCategory = function(categoryValidator) {
  return ({
    categoryName,
    categoryDescription
  } = {}) => {
    let {error} = categoryValidator({categoryName, categoryDescription})
    if (error) throw new Error(error)

    return {
      getCategoryName: () => categoryName,
      getCategoryDescription: () => categoryDescription
    }
  }
}

module.exports = buildMakeCategory