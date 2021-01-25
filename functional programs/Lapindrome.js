let utility = require('../Utility/utility.js')
var readline = require("readline-sync");

var str1 = readline.question("\nEnter string : ");
let lapindromeFind = utility.lapindromeFind(str1)
console.log("Is given string a lapindrome ? " + lapindromeFind)