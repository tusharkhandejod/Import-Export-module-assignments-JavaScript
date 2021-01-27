let utility = require('../../Utility/utility')
var readline = require("readline-sync");

var str = readline.question("\nEnter the string : ");
let removeVowels = utility.removeVowels(str)
console.log(removeVowels)