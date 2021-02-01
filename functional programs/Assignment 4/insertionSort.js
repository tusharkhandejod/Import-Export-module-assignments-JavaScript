let readline = require('readline-sync');

let arraysize = readline.questionInt("\nEnter the array size : ")
let array = [];
for (let i = 0; i < arraysize; i++) {
    array[i] = readline.questionInt("\nEnter the " + i + " th array element : ")
}

console.log("\nArray : " + array)

function insertionSort(array) {
    let min;
    let j;
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1]
            j = j - 1;
        }

        array[j] = temp


    }

    return array;
}

console.log("\nSorted array using insertion sort : " + insertionSort(array))