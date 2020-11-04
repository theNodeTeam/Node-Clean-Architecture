/*
    name: CATEGORY SERIALIZER
    path: data-access/product-db/mysql/categorySerializer.js
    Objective: In this file we have the mapping of database fields to our own created field names. This serialzer return the data to frontend. 
*/

// this function maps the field of database to our fields
const _serializeSingle = (category) => {
    return {
      'categoryID': category.categoryID,
      'categoryName': category.categoryName,
      'categoryDescription': category.categoryDescription
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
  