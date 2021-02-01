let readline = require('readline-sync');
console.log("\nThis is the program of leap year using promises")
let year = readline.questionInt("\nEnter the year : ")

try {

    if (year == "") {
        throw new Error("Input field is empty")
    }

    let regYear = /[0-9]{4}/
    if (regYear.test(year)) {

        function newLeapYear(year) {
            return new Promise(function(resolve, reject) {
                if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                    resolve("It is a leap year")
                } else {
                    reject("It is not a leap year")
                }
            })
        }
    } else {
        throw new Error("Wrong input provided")
    }


} catch (error) {
    console.log(error)
} finally {
    newLeapYear(year).then(function(data) {
        console.log(data)
    }).catch(function(error) {
        console.log(error)
    })
}