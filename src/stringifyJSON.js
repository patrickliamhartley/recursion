// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	
  if (Array.isArray(obj)) {

    obj = obj.map(function(value) {
      return stringifyJSON(value);
    });

    return ('[' + obj + ']');
  }
  if (typeof(obj)==='null'){

  	return 'null';
  }
  if (typeof(obj)==="string"){
  	return '"'+obj+'"';
  }
  if (typeof(obj)==="undefined"){
  	return 'undefined';
  }
  if (typeof(obj)==="function"){
  	return 'undefined';
  }

  if(obj && typeof(obj)==='object'){
  	var array=[];

  	for (var key in obj){	
  		if (obj[key] === undefined || typeof(obj[key]) === 'function') {
        return "{}";
    }
      
  		array.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
  	};
  	return '{'+array.join()+'}';


  }
  return '' + obj;


};
 
