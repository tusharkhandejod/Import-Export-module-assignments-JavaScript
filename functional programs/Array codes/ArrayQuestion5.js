let utility = require('../../Utility/utility.js')
var readline = require("readline-sync");

var arraysize = readline.question("\nEnter array size : ");
var key = readline.question("Enter key value : ");
let arrayFirstAndLastIndexOf = utility.arrayFirstAndLastIndexOf(arraysize, key)
console.log(arrayFirstAndLastIndexOf)