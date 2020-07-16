'use strict';

let linqed = function(array) {
  
  let publicAPI = [];
  
  let __all = function __all(filter) {
    
    let value = true;
    
    if (typeof(filter) === 'undefined'
        || filter === null) {
      
      value = false;
    }
    
    if (typeof(filter) === 'number'
        || typeof(filter) === 'string'
        || typeof(filter) === 'boolean') {
      
      this.forEach((item) => {
        if (item !== filter) {
          value = false;
        }
      });
    }
    
    if (typeof(filter) === 'function') {
      
      this.forEach((item) => {
        if (!filter(item)) {
          value = false;
        }
      });
    }
    
    return value;
  }
  
  // Return true if collection contains element, false otherwise
  let __contains = function __contains(filter) {
    
    let i = 0;
    
    if (typeof(filter) === 'undefined') {
      return this;
    }
    
    if (typeof(filter) === 'function') {
      for(i = 0; i < this.length; ++i) {
        if (filter(this[i])) {
          return true;
        }
      }
      return false;
    } else {
      if (this.indexOf(filter) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  // Return an empty collection, usefull sometimes
  // for resetting a collection
  let __empty = function __empty() {
    
    this.length = 0;
    
    return this;
  };
  
  // Return the first element of a collection that matches
  // the provided filter
  let __first = function __first(filter) {
    
    let i = 0;
    
    if (typeof(filter) === 'undefined' 
        || filter === null) {
      for(i = 0; i < this.length; ++i) {
        if (!!this[i]) {
          return this[i];
        }
      }
    } 
    
    if (typeof(filter) === 'number'
               || typeof(filter) === 'string'
               || typeof(filter) === 'boolean') {
      for(i = 0; i < this.length; ++i) {
        if (this[i] === filter) {
          return i;
        }
      }
      return -1;
    }
    
    if (typeof(filter) === 'function') {
      for(i = 0; i < this.length; ++i) {
        if (filter(this[i])) {
          return this[i];
        }
      }
      return null;
    }
    
    console.error(`.first() does not support filters of type "${typeof(filter)}"`)
    return null;
  };
  
  // Return the first element of a collection that matches
  // the provided filter or a default value if no match is
  // found
  let __firstOrDefault = function __firstOrDefault(filter, def) {
    
    let value = null;
    
    if (typeof(filter) === 'undefined'
        || filter === null) {
      return def;
    }
    
    if (typeof(filter) === 'number'
        || typeof(filter) === 'string'
        || typeof(filter) === 'boolean') {
      value = this.first(filter);
      if (value === null
          || value === -1) {
        return def;
      } else {
        return value;
      }
    }
    
    if (typeof(filter) === 'function') {
      value = this.first(filter);
      if (value === null) {
        return def;
      } else {
        return value;
      }
    }
    
    console.error(`.first() does not support filters of type "${typeof(filter)}"`)
    return null;
  };
  
  // Return a merged array joined on the filter function
  // provided
  let __join = function __join(outer, filter) {
    
    let joinedArray = linqed([]);
    
    if (!Array.isArray(outer)
       || typeof(filter) !== 'function') {
      return this;
    } else {
      return this;
    }
  };
  
  // Return collection of values based on the filter provided
  let __select = function __select(filter) {
    
    let collection = linqed([]);
    
    if (typeof(filter) === 'function') {
      this.forEach((item) => {
        collection.push(filter(item));
      });
      return collection;
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
  
  publicAPI.push(
    { name: 'all', method: __all },
    { name: 'contains', method: __contains },
    { name: 'empty', method: __empty },
    { name: 'first', method: __first },
    { name: 'firstOrDefault', method: __firstOrDefault },
    { name: 'join', method: __join },
    { name: 'select', method: __select },
    { name: 'where', method: __where }
  );
  
  publicAPI.forEach((endpoint) => {
    Object.defineProperty(array, endpoint.name, {
      enumerable: false,
      value: endpoint.method
    });
  });
  
  return array;
};

module.exports = linqed;