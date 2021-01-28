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


//Assignment 4 ==> question 2
function primeNoRange(min, max) {
    let temp = 0;
    for (let i = min; i <= max; i++) {
        for (let j = 2; j <= i - 1; j++) {
            if ((i % j) === 0) {
                temp++;
            }
        }
        if (temp === 0) {
            console.log(i + " ");
        } else {
            temp = 0;
        }
    }
}


//Assignment 4 ==> question 3
function fullPrimeNumber(number) {
    let temp = 0;
    let fullPrimeFlag1 = false;
    let fullPrimeFlag2 = false;
    let array = [];
    for (let i = 2; i <= number - 1; i++) {
        if ((number % i) === 0) {
            temp++;

        }

    }

    if (temp === 0) {
        console.log(number + " number itself is a prime number")
        fullPrimeFlag1 = true;
    } else {
        temp = 0;
    }

    for (let i = 0; i < number.length; i++) {
        array.push(number.charAt(i));
    }

    console.log("\nSeperated digits : " + array);

    let flag = 0;
    maxLength = array.length;

    for (let i = 0; i < maxLength; i++) {
        console.log("\nWe are checking for " + array[i])
        for (let j = 2; j <= array[i] - 1; j++) {
            if ((array[i] % j) === 0) {
                flag++;
            }

        }
        if (flag === 0) {
            console.log(array[i] + " number is a prime number")
            fullPrimeFlag2 = true;
        } else {
            console.log(array[i] + " number is a not prime number")
            flag = 0;
            fullPrimeFlag2 = false;
        }


    }

    if (fullPrimeFlag1 === true && fullPrimeFlag2 === true) {
        return true;
    } else {
        return false;
    }

}


//Assignment 4 ==> question 4
function camelCaseLetters(str) {
    let camelCount = 0;

    for (let i = 0; i < str.length; i++) {

        let ch = str.charAt(i)
        if (ch >= 'A' && ch <= 'Z') {
            camelCount++;
        }

    }

    return camelCount;

}


//Assignment 4 ==> question 1
function minNoOfNotes(amount) {
    let notes = [1000, 500, 100, 50, 10, 5, 2, 1];
    let minNotes = [];

    for (let i = 0; i < 9; i++) {
        if (amount >= notes[i]) {
            minNotes[i] = ~~(amount / notes[i]);
            amount = amount - (notes[i] * minNotes[i]);
        }


        if (amount === 0) {
            break;
        }
    }

    for (let i = 0; i < notes.length; i++) {
        if (minNotes[i] !== 0) {
            console.log(notes[i] + " : " + minNotes[i]);
        }
    }
}


//Assignment 4 ==> question 5
function linearSearch(arraysize, searchElement, nameArray, mobileNoArray) {
    for (let i = 1; i <= arraysize; i++) {
        console.log(i + " :  Name : " + nameArray[i] + "   Mobile no : " + mobileNoArray[i])
    }

    console.log("\nWe are using linear search algorithm")

    for (let i = 1; i <= arraysize; i++) {
        if (nameArray[i] === searchElement || mobileNoArray[i] === searchElement) {
            console.log("\nRecord is found at " + i + " th index")
            console.log("Name : " + nameArray[i] + "   Mobile number : " + mobileNoArray[i])
        }
    }

}

function binarySearch(arraysize) {
    let arr = []
    arr.length = arraysize;
    for (let i = 1; i <= arraysize; i++) {
        arr[i] = readline.question("\nEnter " + i + " th array element : ");
    }

    console.log("\nFinal array : " + arr);
    arr = arr.sort();
    let searchElement = readline.question("\nEnter the element that you are searching for : ")
    console.log("\nWe are using binary search algorithm")
    let startPosition = 1;
    let endPosition = arr.length;
    let middlePosition = Math.floor((startPosition + endPosition) / 2)

    while (arr[middlePosition] !== searchElement && startPosition <= endPosition) {
        if (arr[middlePosition] < searchElement) {
            startPosition = middlePosition + 1;
        } else {
            endPosition = middlePosition - 1;
        }
        middlePosition = Math.floor((startPosition + endPosition) / 2)
    }
    return arr[middlePosition] === searchElement ? "\nElement found at : " + middlePosition : "Element not found"
}


module.exports = {
    sumOfDigits,
    sumOfTwoDigits,
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
    convertToLowerCase,
    primeNoRange,
    fullPrimeNumber,
    camelCaseLetters,
    minNoOfNotes,
    linearSearch,
    binarySearch
}
