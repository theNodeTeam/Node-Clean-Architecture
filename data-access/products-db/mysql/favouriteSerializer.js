const _serializeSingle = (item) => {
    return {
      'userID': item.userID,
      'itemID': item.itemID
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
  