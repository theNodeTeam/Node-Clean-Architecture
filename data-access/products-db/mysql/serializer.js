const _serializeSingle = (item) => {
  return {
    'productID': product.productID,
    'productName': product.productName,
    'productDescription': product.productDescription,
    'productType': product.productType,
    'productBarcode': product.productBarcode
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
