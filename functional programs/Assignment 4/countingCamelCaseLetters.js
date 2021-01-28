let utility = require('../../Utility/utility')
let readline = require("readline-sync");

let str = readline.question("\nEnter the string : ");
let camelCaseLetters = utility.camelCaseLetters(str);
console.log("Camel case letters count : " + camelCaseLetters);