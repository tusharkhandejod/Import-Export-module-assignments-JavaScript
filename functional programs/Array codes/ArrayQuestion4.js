let utility = require('../../Utility/utility.js')
var readline = require("readline-sync");

var arraysize = readline.question("\nEnter array size : ");
var k = readline.question("Enter k value : ");
let modifiedArray = utility.modifiedArray(arraysize, k)
console.log("\nUpdated array is : " + modifiedArray)