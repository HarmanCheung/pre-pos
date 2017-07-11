'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = new Array();
  var j = 0;
  for(var i = 0;i < collectionA.length;i++) {
    
    if(collectionA[i] == collectionA[i + 1]) {
       j++; 
}
      else {
        j++;
        collectionC.push({key: collectionA[i] , count: j});
        j = 0;
}
}
    for(var k = 0;k < collectionC.length;k++) {
     for(var m = 0;m < objectB.value.length;m++) {
       if(collectionC[k].key == objectB.value[m]) {
         collectionC[k].count-=parseInt(collectionC[k].count/3);
}
}
}
    return collectionC;
}


