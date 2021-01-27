let utility = require('../../Utility/utility.js')
var readline = require("readline-sync");

var arraysize = readline.question("\nEnter array size : ");
let indexAndValueSame = utility.indexAndValueSame(arraysize)
console.log("\nOutput : " + indexAndValueSame)