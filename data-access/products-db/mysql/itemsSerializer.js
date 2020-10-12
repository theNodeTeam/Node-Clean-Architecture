const _serializeSingle = (product) => {
    return {
      'productID': item.productID,
      'storeID': item.storeID,
      'productPrice': item.productPrice,
      'productDiscount': item.productDiscount,
      'isFeatured': item.isFeatured,
      'isOutOfStock': item.isOutOfStock,
      'outOfStockDate': item.outOfStockDate,
      'expDate': item.expDate,
      'featuredDetails': item.featuredDetails,
      'quantity': item.quantity,
      'speciaIInstructions': item.speciaIInstructions,
      'discount': item.discount,
      'itemBarcode': item.itemBarcode,
      'noOfImage': item.noOfImage,
      'disclaimer': item.disclaimer,
      'nutritionFacts': item.nutritionFacts,
      'itemActive': item.itemActive
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
  