let utility = require('../../Utility/utility')
let readline = require("readline-sync");

let number = readline.question("\nEnter the number : ");
let fullPrimeNumber = utility.fullPrimeNumber(number);
console.log(number + " is a full prime number ? " + fullPrimeNumber);