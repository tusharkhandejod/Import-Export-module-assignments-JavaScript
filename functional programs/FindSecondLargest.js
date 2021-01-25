let utility = require('../Utility/utility.js')
var readline = require("readline-sync");

var number1 = readline.question("Enter your first number : ");
var number2 = readline.question("Enter your second number : ");
var number3 = readline.question("Enter your third number : ");

let secondLargest = utility.secondLargest(number1, number2, number3)
console.log("Second largest number is : " + secondLargest)