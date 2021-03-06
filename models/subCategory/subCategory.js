/*
    name: SUBCATEGORY MAKER
    path: models/subCategory/subCategory.js
    Objective: In this we make the getter of validated data, if there is any error it return the error#
    next File: subcategory > subcategory-schema
*/


let buildMakeSubCategory = function(subCategoryValidator) {
  return ({
    subCategoryName,
    subCategoryDescription,
    categoryID,
    subCategoryActive
    // productID
  } = {}) => {
    let {error} = subCategoryValidator({
      subCategoryName, 
      subCategoryDescription, 
      categoryID,
      subCategoryActive
      // productID
    })
    if (error) throw new Error(error)

    return {
      getSubCategoryName: () => subCategoryName,
      getSubCategoryDescription: () => subCategoryDescription,
      getCategoryID: () => categoryID,
      subCategoryActive: () => subCategoryActive
      // getProductID: () => productID
    }
  }
}

module.exports = buildMakeSubCategory