/*
Question: 

Write function:bmiIndex
That takes two inputs: height,weight. 
And returns BMI Index to the closest whole number. 
BMI=weight/(height*height)

*/

function bmiCalculator(height, weight) {
    let bmi_index = Math.round(weight / (height ** 2));
    return bmi_index;
}
let bmi = calcBmi(50, 2000000);
console.log(bmi);