let utility = require('../../Utility/utility')
let readline = require('readline-sync');

let arraysize = readline.question("\nEnter the array size : ");


let binarySearch = utility.binarySearch(arraysize);
console.log(binarySearch);