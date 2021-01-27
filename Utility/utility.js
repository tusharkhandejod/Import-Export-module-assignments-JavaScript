var readline = require("readline-sync");

//Assignment 1 ==> question 1
function sumOfDigits(num) {
    let sum = num.toString().split('').map(Number).reduce(function(a, b) { return a + b; }, 0);
    return sum;
}


//Assignment 1 ==> question 2
function sumOfTwoDigits(num) {

    let lastDigit = num % 10;

    while (num >= 10) {
        num /= 10;
    }
    let firstDigit = num;
    return ~~(firstDigit + lastDigit);

}


//Assignment 1 ==> question 3
function secondLargest(num1, num2, num3) {
    var array = [num1, num2, num3]
    var sortedArray = array.sort()
    return sortedArray[1];

}

//Assignment 1 ==> question 4
function anagramFind(str1, str2) {

    let target1 = str1.toLowerCase().split('').sort().join('')
    let target2 = str2.toLowerCase().split('').sort().join('')
    return target1 === target2;
}


//Assignment 1 ==> question 5
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


//Assignment 1 ==> question 6
function totalBalance(withdrawAmount) {
    let totalAmount = 1000;
    if (withdrawAmount % 5 === 0) {
        totalAmount = totalAmount - withdrawAmount - 0.5;
    } else {
        console.log("Error!!\nEnter amount in multiples of 5")
    }
    return totalAmount;
}


//Assignment 1 ==> question 7
function lapindromeFind(str) {
    let length = str.length
    if (length % 2 === 0) {
        let firstWord = str.substring(0, length / 2)
        let secondWord = str.substring((length / 2), length)
        let target1 = firstWord.toLowerCase().split('').sort().join('')
        let target2 = secondWord.toLowerCase().split('').sort().join('')
        return target1 === target2;
    } else if (length % 2 !== 0) {

        let firstWord = str.substring(0, (length / 2))
        let secondWord = str.substring((length / 2) + 1, length)
        let target1 = firstWord.toLowerCase().split('').sort().join('')
        let target2 = secondWord.toLowerCase().split('').sort().join('')
        return target1 === target2;

    }
}

//Assignment 2 ==> Array question 1
function findArraySorted(arraysize) {
    var array = [];
    array.length = arraysize;
    for (let i = 0; i < arraysize; i++) {
        array[i] = readline.question("\nEnter " + i + " array element : ");
    }
    console.log(array)

    function arraySortedOrNot(array, arraysize) {
        //Array has one or no elements
        if (arraysize == 1 || arraysize == 0) {
            return 1;
        }
        //checking for last two array elements are they sorted or not
        else if (array[arraysize - 1] < array[arraysize - 2]) {
            return 0;
        }
        return arraySortedOrNot(array, arraysize - 1);

    }
    if (arraySortedOrNot(array, arraysize) !== 0) {
        return true;
    } else {
        return false;
    }
}


//Assignment 2 ==> Array question 2
function indexAndValueSame(arraysize) {
    var finalPosition = [];
    var array = [];
    array.length = arraysize;
    for (let i = 1; i <= arraysize; i++) {
        array[i] = readline.question("\nEnter " + i + " array element : ");
    }
    console.log("\nArray : " + array)

    for (let i = 1; i <= arraysize; i++) {
        let position = array.indexOf(array[i]);
        let elementValue = array[i]

        console.log(position + " " + array[i])

        if (array[i] == position) {
            finalPosition[i] = position;
        }

    }
    return finalPosition;
}


//Assignment 2 ==> Array question 3
function findNoOfElements(arraysize, setvalue) {
    var array = [];
    array.length = arraysize;
    for (let i = 0; i < arraysize; i++) {
        array[i] = readline.question("\nEnter " + i + " array element : ");
    }
    console.log("\nFinal array : " + array)

    let lessThanCount = 0;
    let greaterThanCount = 0;
    for (let i = 0; i < arraysize; i++) {

        if (array[i] <= setvalue) {
            lessThanCount++;

        } else if (array[i] > setvalue) {
            greaterThanCount++;

        }
    }
    console.log("\nNumber of array elements which are less than or equal to " + setvalue + " are : " + lessThanCount)
    console.log("Number of array elements which are greater than or equal to " + setvalue + " are : " + greaterThanCount)

}

//Assignment 2 ==> Array question 4
function modifiedArray(arraysize, k) {
    var array = [];
    array.length = arraysize;
    for (let i = 0; i < arraysize; i++) {
        array[i] = readline.question("\nEnter " + i + " array element : ");
    }
    console.log("\nInitial array before swapping : " + array)

    i = k - 1;
    let temp = array[i];
    array[i] = array[array.length - k];
    array[array.length - k] = temp;
    console.log("Final array after swapping : " + array)
    return array;
}


//Assignment 2 ==> Array question 5
function arrayFirstAndLastIndexOf(arraysize, key) {
    var array = [];
    array.length = arraysize;
    for (let i = 0; i < arraysize; i++) {
        array[i] = readline.question("\nEnter " + i + " array element : ");
    }
    console.log("\nArray : " + array)
    let startIndex = array.indexOf(key);
    let endIndex = array.lastIndexOf(key);

    console.log("\nStart index of " + key + " is : " + startIndex)
    console.log("Last index of " + key + " is : " + endIndex)

}

//Assignment 3 ==> Strings question 1
function findLowerUpperSpecialChar(str) {
    let upperCount = 0;
    let lowerCount = 0;
    let specialCharCount = 0;
    let numericCount = 0;

    for (let i = 0; i < str.length; i++) {

        let ch = str.charAt(i)
        if (ch >= 'A' && ch <= 'Z') {
            upperCount++;
        } else if (ch >= 'a' && ch <= 'z') {
            lowerCount++;
        } else if (ch >= '0' && ch <= '9') {
            numericCount++;
        } else {
            specialCharCount++;
        }

    }

    console.log("\nTotal Uppercase characters : " + upperCount);
    console.log("Total Lowercase characters : " + lowerCount);
    console.log("Total Special characters : " + specialCharCount);
    console.log("Total Numeric characters : " + numericCount);

}

//Assignment 3 ==> Strings question 2
function divideStr(str) {
    var str1 = '';
    var str2 = '';
    var str3 = '';

    for (let i = 0; i < str.length; i++) {

        let ch = str.charAt(i)
        if (ch >= 'A' && ch <= 'Z') {
            str1 = str1.concat(ch)
        } else if (ch >= 'a' && ch <= 'z') {
            str1 = str1.concat(ch)
        } else if (ch >= '0' && ch <= '9') {
            str3 = str3.concat(ch)
        } else {
            str2 = str2.concat(ch)
        }

    }

    console.log("\nAll Alphabets characters : " + str1);
    console.log("All Special characters : " + str2);
    console.log("All Numeric characters : " + str3);


}


//Assignment 3 ==> Strings question 3
function extractNumbers(str) {

    console.log("\nOriginal string before removing alphabets : " + str);
    let str1 = '';

    for (let i = 0; i < str.length; i++) {

        let ch = str.charAt(i)
        if (ch >= '0' && ch <= '9') {
            str1 = str1.concat(ch)
        }


    }
    console.log("Updated string after removing alphabets : " + str1);

}

//Assignment 3 ==> Strings question 4
function removeVowels(str) {

    console.log("\nOriginal string before removing vowels : " + str);

    for (let i = 0; i < str.length; i++) {

        let ch = str.charAt(i)
        if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            str = str.replace(ch, '')
        } else if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            str = str.replace(ch, '')
        }


    }

    console.log("Updated string after removing vowels : " + str);

}

//Assignment 3 ==> Strings question 5
function reverseAString(str) {
    console.log("\nOriginal String : " + str);
    str = str.split('').reverse().join('');
    console.log("Reversed String : " + str);
}

//Assignment 3 ==> Strings question 6
function convertToLowerCase(str) {
    console.log("\nOriginal String : " + str);
    str = str.toLowerCase();
    console.log("Updated String : " + str);
}


module.exports = {
    sumOfDigits,
    secondLargest,
    totalAmount,
    totalBalance,
    anagramFind,
    lapindromeFind,
    findArraySorted,
    indexAndValueSame,
    findNoOfElements,
    modifiedArray,
    arrayFirstAndLastIndexOf,
    findLowerUpperSpecialChar,
    divideStr,
    extractNumbers,
    removeVowels,
    reverseAString,
    convertToLowerCase
}
