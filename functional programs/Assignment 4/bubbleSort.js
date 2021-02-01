let readline = require('readline-sync');

let arraysize = readline.questionInt("\nEnter the array size : ")
let array = [];
for (let i = 0; i < arraysize; i++) {
    array[i] = readline.questionInt("\nEnter the " + i + " th array element : ")
}

console.log("\nFinal array : " + array)


function bubbleSort(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp;
            }
        }
    }

    return array;

}

console.log("\nSorted array using bubble sort is : " + bubbleSort(array))