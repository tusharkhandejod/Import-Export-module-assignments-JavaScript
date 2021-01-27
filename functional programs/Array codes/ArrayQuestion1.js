let utility = require('../../Utility/utility.js')
var readline = require("readline-sync");

var arraysize = readline.question("\nEnter array size : ");
let findArraySorted = utility.findArraySorted(arraysize)
console.log("Is array is sorted ? " + findArraySorted)