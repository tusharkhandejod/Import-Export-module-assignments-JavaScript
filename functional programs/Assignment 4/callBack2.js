let arr = [10, 20, 30]
let readline = require('readline-sync');
let time = new Date();

let element = readline.questionInt("\nEnter the element that you want to add : ")

function addElement(element, callback) {
    setTimeout(function() {
        console.log("\nThis is addElement function which is a main function")
        console.log("\nElement value : " + element)
        arr.push(element)
        console.log("\nElement is added")
        let time1 = new Date();
        console.log("Executed at : " + time1.getSeconds())
        callback();
    }, 8000)

}


function printArray() {
    console.log("\nThis is printArray function which acts as a callback function")
    console.log(arr);
    let time2 = new Date();
    console.log("Executed at : " + time2.getSeconds())
}


printArray();
addElement(element, printArray);