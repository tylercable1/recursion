// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
  	return "null";
  }
  
  if (obj === undefined || obj.constructor === Function) {
  	return;
  }
  
  if (obj.constructor === String) {
  	return '"' + obj + '"';
  }
  
  if (obj.constructor === Array) {
    if (obj.length) {
    	var result = [];

    	for (var i = 0; i < obj.length; i++) {
    		result.push(stringifyJSON(obj[i]));
    	}
    	return '[' + result.join(",") + ']';
    } else {
    	return '[]';
    }
  }

  if (obj.constructor === Object) {
  	var keys = Object.keys(obj);
  	if (keys.length) {
  		var result = '';

  		for (var i = 0; i < keys.length; i++) {
  			var key = keys[i];

  			if (!key || obj[key] === undefined || typeof key === 'function' || typeof obj[key] === 'function') {

  			} else {
  				if (i === keys.length - 1) {
  					result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
  				} else {
  					result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  				}
  			}
  		}
  		return '{' + result + '}';
  	} else {
  		return '{}';
  	}
  }
  return obj.toString();
};
