'use strict';

function countSameElements(collection) {
  var result = new Array();
  var j = 0;
  for(var i = 0;i < collection.length;i++) {
    
    if(collection[i] == collection[i + 1]) {
       j++; 
}
      else {
        j++;
        result.push({key: collection[i] , count: j});
        j = 0;
}
}
      return result;
}


