/*

Write a function whoPays(){}

This functions selects a random person from names array and returns that person

Make sure your code for works different array sizes.
Eg:
var names =["Sam","Tom",Cindy","Cole","Jim"];
Use Math.random() to get a random number
Use that number as index of array to get random name

*/

function whoPays(names){

    var numOfPeople = names.length;
    var randomNumber=Math.floor(Math.random()*numOfPeople);
    var randomName = names[randomNumber];
    return`${randomName} pays the bill`;
  
  }
  
  var names = ['Sam','Tom','Cindy','Jim'];
  
  console.log(whoPays(names));