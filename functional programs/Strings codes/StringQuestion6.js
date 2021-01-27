let utility = require('../../Utility/utility')
var readline = require("readline-sync");

var str = readline.question("\nEnter the string : ");
let convertToLowerCase = utility.convertToLowerCase(str);
console.log(convertToLowerCase);