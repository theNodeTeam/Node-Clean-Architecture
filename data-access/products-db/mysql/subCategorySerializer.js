const _serializeSingle = (subCategory) => {
    return {
      'subCategoryID': subCategory.subCategoryID,
      'subCategoryName': subCategory.subCategoryName,
      'subCategoryDescription': subCategory.subCategoryDescription,
      'categoryID': subCategory.categoryID,
      'productID': subCategory.productID
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
  