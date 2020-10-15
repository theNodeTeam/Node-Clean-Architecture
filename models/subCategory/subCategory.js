let buildMakeSubCategory = function(subCategoryValidator) {
  return ({
    subCategoryName,
    subCategoryDescription,
    categoryID,
    // productID
  } = {}) => {
    let {error} = subCategoryValidator({
      subCategoryName, 
      subCategoryDescription, 
      categoryID,
      // productID
    })
    if (error) throw new Error(error)

    return {
      getSubCategoryName: () => subCategoryName,
      getSubCategoryDescription: () => subCategoryDescription,
      getCategoryID: () => categoryID,
      // getProductID: () => productID
    }
  }
}

module.exports = buildMakeSubCategory