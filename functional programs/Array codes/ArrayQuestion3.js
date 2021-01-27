let utility = require('../../Utility/utility.js')
var readline = require("readline-sync");

var arraysize = readline.question("\nEnter array size : ");
var setvalue = readline.question("Enter the set value : ");
let findNoOfElements = utility.findNoOfElements(arraysize, setvalue)
console.log(findNoOfElements)