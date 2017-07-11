'use strict';

function countSameElements(collection) {
  var result = new Array();
  result[0] = {name: collection[0][0] , summary: 1};
  for(var i = 1;i < collection.length;i++) {
    if(collection[i][0] == result[result.length - 1].name) {
      if(collection[i].length > 1) {
        result[result.length - 1].summary += parseInt(collection[i].replace(/[^0-9]/ig,"")) - 1;
}
      result[result.length - 1].summary++;
}
   else {
     if(collection[i].length > 1) {
        result.push({name: collection[i][0] , summary: parseInt(collection[i].replace(/[^0-9]/ig,""))});
}
     else {
       result.push({name: collection[i][0] , summary: 1});
}
}
}
  return result;
}
        
