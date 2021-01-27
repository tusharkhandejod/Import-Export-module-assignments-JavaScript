let utility = require('../../Utility/utility')
var readline = require("readline-sync");

var str = readline.question("\nEnter the string : ");
let divideStr = utility.divideStr(str)
console.log(divideStr)