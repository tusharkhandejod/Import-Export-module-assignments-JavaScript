function sumOfDigits(num) {
    let sum = num.toString().split('').map(Number).reduce(function(a, b) { return a + b; }, 0);
    return sum;
}

function sumOfTwoDigits(num) {

    let lastDigit = num % 10;

    while (num >= 10) {
        num /= 10;
    }
    let firstDigit = num;
    return ~~(firstDigit + lastDigit);

}

function secondLargest(num1, num2, num3) {
    var array = [num1, num2, num3]
    var firstmax = Math.max.apply(null, array)
    array.splice(array.indexOf(firstmax), 1)
    var secondmax = Math.max.apply(null, array)
    return secondmax;

}

function totalAmount(price, quantity) {
    let finalAmount, totalAmount;
    if (quantity > 1000) {
        totalAmount = (price * quantity);
        console.log("\nAmount before discount : " + totalAmount)
        console.log("But you are getting additional 10% discount")
        finalAmount = (price * quantity) * 0.9;
    } else {
        finalAmount = (price * quantity);
    }

    return finalAmount;

}

function totalBalance(withdrawAmount) {
    let totalAmount = 1000;
    if (withdrawAmount % 5 === 0) {
        totalAmount = totalAmount - withdrawAmount - 0.5;
    } else {
        console.log("Error!!\nEnter amount in multiples of 5")
    }
    return totalAmount;
}

function anagramFind(str1, str2) {

    let target1 = str1.toLowerCase().split('').sort().join('')
    let target2 = str2.toLowerCase().split('').sort().join('')
    return target1 === target2;
}

function lapindromeFind(str) {
    let length = str.length
    if (length % 2 === 0) {
        let firstWord = str.substring(0, length / 2)
        let secondWord = str.substring((length / 2), length)
        let target1 = firstWord.toLowerCase().split('').sort().join('')
        let target2 = secondWord.toLowerCase().split('').sort().join('')
        return target1 === target2;

    }
}


module.exports = { sumOfDigits, secondLargest, totalAmount, totalBalance, anagramFind, lapindromeFind }