/*

3.Create a function that counts the integer's number of digits.

count(318) -> 3
count(-1232) -> 4
count(46666) -> 5
-1232 -> 1232 -> 4

*/

function count(n){
  
    if(n<0){
      return (-n).toString().length;
    }
    else
      {
        return n.toString().length;
      }
   
  }
  
  console.log(count(-11000));