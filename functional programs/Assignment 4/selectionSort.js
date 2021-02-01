let readline = require('readline-sync');

let arraysize = readline.questionInt("\nEnter the array size : ")
let array = [];
for (let i = 0; i < arraysize; i++) {
    array[i] = readline.questionInt("\nEnter the " + i + " th array element : ")
}

console.log("\nArray : " + array)

function selectionSort(array) {
    let min;
    let temp;
    for (let i = 0; i < array.length; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        temp = array[i]
        array[i] = array[min]
        array[min] = temp;
    }

    return array;
}

console.log("\nSorted array using selection sort : " + selectionSort(array))