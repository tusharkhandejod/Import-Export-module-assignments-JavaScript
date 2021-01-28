let utility = require('../../Utility/utility')
let readline = require('readline-sync');

let amount = readline.question("\nEnter the amount that you want to withdraw : ");
let minNoOfNotes = utility.minNoOfNotes(amount);
console.log(minNoOfNotes);