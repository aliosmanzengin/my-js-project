/*

Create a function which returns the number of true values there are in an array

countTrue([true,false,true,true]) -> 3

countTrue([true,false]) -> 1

*/


function countTrue(arr){
    var count = 0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]===true){
        count++;
      }
    }
    return count;
  }
  
  arr = [true,false,true,true];
  
  console.log("The count of true is : "+countTrue(arr));