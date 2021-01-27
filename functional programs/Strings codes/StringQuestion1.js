let utility = require('../../Utility/utility')
var readline = require("readline-sync");

var str = readline.question("\nEnter the string : ");
let findLowerUpperSpecialChar = utility.findLowerUpperSpecialChar(str)
console.log(findLowerUpperSpecialChar)