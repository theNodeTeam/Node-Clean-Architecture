/*
    name: ITEM SERIALIZER
    path: data-access/product-db/mysql/transProductSerializer.js
    Objective: In this file we have the mapping of database fields to our own created field names. This serialzer return the data to frontend. 
    next File: serializer > index
*/

// this function maps the field of database to our fields
const _serializeSingle = (item) => {
    return {
      'orderID': item.orderID,
      'itemID': item.itemID,
      'itemQuantity': item.itemQuantity
    };
  };
  
// this function check the data if it is array it iterate the else it send the data to _serializeSingle for mapping.
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
