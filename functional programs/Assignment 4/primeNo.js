let utility = require('../../Utility/utility');
let readline = require("readline-sync");

console.log("\nEnter the range in which you want to find out the prime numbers :")
let min = readline.question("\nfrom : ");
let max = readline.question("upto : ");
let primeNoRange = utility.primeNoRange(min, max);
console.log(primeNoRange);