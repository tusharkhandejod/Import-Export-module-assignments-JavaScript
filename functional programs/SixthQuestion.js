let utility = require('../Utility/utility.js')
var readline = require("readline-sync");

var withdrawAmount = readline.question("\nEnter how much amount you want to withdraw : ");
let totalBalance = utility.totalBalance(withdrawAmount);
console.log("Your total account balance after this withdrawal is : " + totalBalance)