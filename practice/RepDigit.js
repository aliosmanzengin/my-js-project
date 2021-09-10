/*

A repdigit is a positive number composed out of the same digit.
Create a function  that takes an integer and returns whether it's a repdigit or not

isRepdigit(66) ➞ true 

isRepdigit(6666) ➞ true 

['6','6','6','6']

isRepdigit(0) ➞ true 

isRepdigit(01) ➞ false 

isRepdigit(-11) ➞ false

['-','1','1']

*/


function isRepDigit(num){
  
    num +="";
    
    for(i=0;i<num.length;i++){
      
      if(num[i]!=num[0])
        {
          return false;
        }
    }
    return true;
  }
  
  console.log(isRepDigit(2222));