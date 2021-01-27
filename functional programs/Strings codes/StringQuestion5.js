let utility = require('../../Utility/utility')
var readline = require("readline-sync");

var str = readline.question("\nEnter the string : ");
let reverseAString = utility.reverseAString(str);
console.log(reverseAString);