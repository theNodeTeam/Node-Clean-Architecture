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