console.clear();

/*
primitive data types in JS:
1-string
2-number
3-boolean
4-null
5-undefined
*/
var myName = 'JavaScript';
console.log(typeof(myName));

var myName = "Java"
console.log(typeof(myName));
/*
Number literal:
we only have number data type. no int, double, byte...
*/
var myNum = 20;
console.log(typeof(myNum));

var myNum = 20.65;
console.log(typeof(myNum));

var myNum = 20/0;//infinity
console.log(myNum);
console.log(typeof(myNum));

// num+string
var num1 = 20 + 'a';
console.log(num1);
console.log(typeof(num1));

//string + num
var num2 = 'a' + 20;
console.log(num2);
console.log(typeof num2);

//bool
var isExist=true;
console.log(isExist);
console.log(typeof(isExist));//boolean

//null
var pickedColor = null;
console.log(pickedColor);
console.log(typeof pickedColor);


/*
undefined
*/
​
var selectedCar;
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"
​
var selectedCar=undefined;
console.log(selectedCar);//undefined
console.log(typeof(selectedCar));//"undefined"
​
​
​
​
​
​