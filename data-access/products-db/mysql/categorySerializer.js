const _serializeSingle = (category) => {
    return {
      'categoryID': category.categoryID,
      'categoryName': category.categoryName,
      'categoryDescription': category.categoryDescription
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
  