/* 
Strings Manipulations:
​
Ask user to enter a name: and print “Name”
Make sure only the first initial is always capital and the rest always small
Eg:
var name=ahmet;   =>>>>Ahmet
var name=aHmet;   =>>>>Ahmet
var name=AHMET    =>>>>Ahmet
​
*/
​
console.clear();
​
let userName=prompt("Enter your name")
​
​
//userName.slice(0,1).toUpperCase() : getting the first letter and converting to upper case
//userName.slice(1).toLowerCase()   : getting the all remaining letters and converting to lower case
let properName=userName.slice(0,1).toUpperCase()+userName.slice(1).toLowerCase();
​
console.log(properName)
​

/* 
Strings Manipulations:
*/
console.clear();
let str1='I love javascript';
//length
let len=str1.length;
console.log(len)
//indexof
//find index of love
let indexOfLove=str1.indexOf('love')
console.log(indexOfLove)
//slice(start, end(optional))
//substring(start,end(optional))
//Note: if there is no end index, then end index will be the last index
//Note: when slice(-5), returns LAST 5 characters
//Note: when substring(-5) returns all charachters
//Note: substring(5,1) = substring(1,5)
console.log(str1.slice(3));//"ove javascript"
console.log(str1.slice(-3));//ipt
console.log(str1.slice(5,1));//""
//substring
console.log(str1.substring(3));//"ove javascript"
console.log(str1.substring(-3));//"I love javascript"
console.log(str1.substring(5,1));//" lov"
