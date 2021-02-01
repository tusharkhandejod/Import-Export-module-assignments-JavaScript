let readline = require('readline-sync');

let number = readline.questionInt("\nEnter a number : ");


try {

    function primeCheck(number) {
        let temp = 0;
        for (let i = 2; i < number; i++) {
            if ((number % i) === 0) {
                temp++;
            }


        }
        return new Promise(function(resolve, reject) {
            if (temp === 0) {

                resolve("This is a prime number");
            } else {

                reject("This is not a prime number");
            }
        })

    }


} catch (error) {
    console.log(error)
} finally {
    primeCheck(number).then(function(data) {
        console.log(data)
    }).catch(function(error) {
        console.log(error)
    })
}