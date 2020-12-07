const _serializeSingle = (student) => {
  return {
    'productID': student.productID,
    'productName': student.productName,
    'productDescription': student.productDescription,
    'productType': student.productType,
    'productBarcode': student.productBarcode
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
