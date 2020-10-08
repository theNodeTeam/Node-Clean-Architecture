const _serializeSingle = (item) => {
    return {
      'orderID': item.orderID,
      'itemID': item.itemID,
      'itemQuantity': item.itemQuantity
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
  