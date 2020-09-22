let buildMakeProduct = function(productValidator) {
  return ({
    productName,
    productDescription,
    productType,
    productBarcode
  } = {}) => {
    let {error} = productValidator({productName, productDescription, productType, productBarcode})
    if (error) throw new Error(error)

    return {
      getProductName: () => productName,
      getProductDescription: () => productDescription,
      getProductType: () => productType,
      getProductBarcode: () => productBarcode
    }
  }
}

module.exports = buildMakeProduct