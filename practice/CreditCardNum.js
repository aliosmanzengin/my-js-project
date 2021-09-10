/* 

Create a function customerInfo

it taks 2 parameters;Name and cardNum,

Returns the info as following

Customer first Letter in Caps and rest is masked(not visible)
Customer card number first 12 digits is masked(not visible) and the last 4 digits is visible


Name = Fowad Hamza
cardNum = 1234 6573 9393 2993

F********* ************2993

1) Take first Letter -> Move it to UpperCase
2) Take the rest -> replace it with *
3) Print 12 '*' 
4) Print the last 4 digits of the credit card.
*/


function customerInfo(name,cardNum){
  
    var firstLetter = name.slice(0,1).toUpperCase();
    var restOfName = name.slice(1).replaceAll(/[a-zA-Z]/gi,'*');
   var specialChars = '\n************';
   var last4Digits = cardNum.slice(12,16);
   
   return ( firstLetter + restOfName + specialChars + last4Digits);
   
 }
 
 console.log(customerInfo('FowadHamza','1234567890123456'));