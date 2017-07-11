'use strict';

function countSameElements(collection) {
  var result = new Array();
  var j = 0;
  for(var i = 0;i < collection.length;i++) {
     if(collection[i].length > 1) {
     result.push({key: collection[i].charAt(0) , count: parseInt(collection[i].replace(/[^0-9]/ig,""))});
}  

    else if(collection[i] == collection[i+1]) {
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
