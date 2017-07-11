'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = new Array();
  var j = 0;
  for(var i = 0;i < collectionA.length;i++) {
     if(collectionA[i].length > 1) {
     collectionC.push({key: collectionA[i].charAt(0) , count: parseInt(collectionA[i].replace(/[^0-9]/ig,""))});
}

    else if(collectionA[i] == collectionA[i+1]) {
       j++;
}
      else {
        j++;
        collectionC.push({key: collectionA[i] , count: j});
        j = 0;
}
}
    for(var i = 0;i < collectionC.length;i++) {
     for(var j = 0;j < objectB.value.length;j++) {
       if(collectionC[i].key == objectB.value[j]) {
         collectionC[i].count-=parseInt(collectionC[i].count/3);
}
}
}
    return collectionC;
}
