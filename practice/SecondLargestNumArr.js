/* 

Create a function to return 
the second largest number from an array


Sort the array in descending order -> Take the 2 value 

*/

function secondLargest(arr){
    arr = arr.sort(function(a,b){
      return b-a;
    });
     return arr[1];
   }
   
   let arr = [100,5,2,10];
   
   console.log("The second largest value is "+secondLargest(arr));