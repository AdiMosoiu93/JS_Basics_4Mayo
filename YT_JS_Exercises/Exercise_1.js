
/* 
https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&ab_channel=codebubb

Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
*/

const number1 = 75;
const number2 = 25;
const sum = number1 + number2;

if (number1 == 100 || number2 == 100) { 
    return console.log(true)
} else if (sum == 100) {
    return console.log(false)
}


// Second try
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;
console.log(isEqualTo100(100,80));
