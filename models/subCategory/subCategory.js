let buildMakeSubCategory = function(subCategoryValidator) {
  return ({
    subCategoryName,
    subCategoryDescription
  } = {}) => {
    let {error} = subCategoryValidator({subCategoryName, subCategoryDescription})
    if (error) throw new Error(error)

    return {
      getSubCategoryName: () => subCategoryName,
      getSubCategoryDescription: () => subCategoryDescription
    }
  }
}

module.exports = buildMakeSubCategory