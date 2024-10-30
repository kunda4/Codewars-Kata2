/**
Description:
In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
 */

function getLargerNumbers(arr1, arr2) {
    const myOgArr = []
    for(let i=0; i<arr1.length; i++)
        if(arr1[i] >= arr2[i]){
          myOgArr.push(arr1[i])
        }else{
          myOgArr.push(arr2[i])
        }
      
    return myOgArr;
  }