let count = true;
let countValue = new Promise(function(resolve, reject) {
    if (count) {
        resolve("This is the resolve statement.")
    } else {
        reject("This is he reject statement")
    }
})

console.log(countValue)