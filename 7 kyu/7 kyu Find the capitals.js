/**
Description:
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
 */
var capitals = function (word) {
    const myArr = []
      const words = word.split("").map((ele, index) => {
      if(ele === ele.toUpperCase()){
        myArr.push(index)
      }
    })
    return myArr
  };