let utility = require('../Utility/utility.js')
var readline = require("readline-sync");

var str1 = readline.question("\nEnter your first string : ");
var str2 = readline.question("Enter your second string : ");
let anagramFind = utility.anagramFind(str1, str2)
console.log("Two given strings are anagram ? " + anagramFind)