let utility = require('../Utility/utility.js')
var readline = require("readline-sync");

var number1 = readline.question("Enter your number : ");
let sum1 = utility.sumOfDigits(number1)
console.log("Sum of the digits is : " + sum1);

let sum2 = utility.sumOfTwoDigits(number1)
console.log("Sum of the first and last digits is : " + sum2);