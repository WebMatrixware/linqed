'use strict';

let linqed = function(array) {
  
  // Return an empty collection, usefull sometimes
  // for resetting a collection
  let __empty = function __empty() {
    
    this.length = 0;
    
    return this;
  };
  
  // Return a merged array joined on the filter function
  // provided
  let __join = function __join(outer, filter) {
    
    if (!Array.isArray(outer)
       || typeof(filter) !== 'function') {
      return this;
    }
    
    return this;
  };
  
  // Return a subset of the collection filtered by a
  // provided lambda function
  let __where = function __where(filter) {
    
    if (typeof(filter) !== 'function') {
      return this;
    }
    
    return this.filter(filter);
  };
  
  Object.defineProperty(array, 'empty', {
    enumerable: false,
    value: __empty
  });
  Object.defineProperty(array, 'join', {
    enumerable: false,
    value: __join
  });
  Object.defineProperty(array, 'where', {
    enumerable: false,
    value: __where
  });
  
  return array;
};

module.exports = linqed;