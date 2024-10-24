/**
var uniqueInOrder=function(iterable){
  const myNewArr = []
  
  for(let index = 0; index< iterable.length; index++) {
    if(iterable[index] !== iterable[index-1]){
      myNewArr.push(iterable[index])
    }
  }
  
  return myNewArr;
  
}
 */

var uniqueInOrder=function(iterable){
    const myNewArr = []
    
    for(let index = 0; index< iterable.length; index++) {
      if(iterable[index] !== iterable[index-1]){
        myNewArr.push(iterable[index])
      }
    }
    
    return myNewArr;
    
  }