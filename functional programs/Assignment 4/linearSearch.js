let utility = require('../../Utility/utility')
let readline = require('readline-sync');

let arraysize = readline.question("\nEnter the array size : ");
let nameArray = [];
let mobileNoArray = [];
nameArray.length = arraysize;
mobileNoArray.length = arraysize;
for (let i = 1; i <= arraysize; i++) {
    nameArray[i] = readline.question("\nEnter your name : ");
    mobileNoArray[i] = readline.question("Enter your mobile number : ");
}
let searchElement = readline.question("\nEnter the element that you are searching for : ");

let linearSearch = utility.linearSearch(arraysize, searchElement, nameArray, mobileNoArray);
console.log(linearSearch);
// let binarySearch = utility.binarySearch(arraysize, searchElement, nameArray, mobileNoArray);
// console.log(binarySearch);