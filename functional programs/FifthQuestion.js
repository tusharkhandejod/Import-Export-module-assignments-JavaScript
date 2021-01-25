let utility = require('../Utility/utility.js')
var readline = require("readline-sync");

var price = readline.question("\nEnter your price per item : ");
var quantity = readline.question("Enter quantity : ");

let totalAmount = utility.totalAmount(price, quantity);
console.log("Total amount is : " + totalAmount)