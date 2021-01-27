let utility = require('../../Utility/utility')
var readline = require("readline-sync");

var str = readline.question("\nEnter the string : ");
let extractNumbers = utility.extractNumbers(str)
console.log(extractNumbers)