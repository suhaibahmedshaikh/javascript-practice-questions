// JavaScript Questions for Practice (Functions)

// 1. Create a function greet that takes a name as an argument and returns a greeting message.

function greet(name) {
    console.log(`${name} welcome come to JavaScript Practice Question Series`);
};

greet("Suhaib");

// 2. Write a function calculateArea that takes the radius of a circle as a parameter and returns the area.

function calculateArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
const radius = 10;
const area = calculateArea(radius);
  
console.log(`Radius: ${radius}`);
console.log(`Area: ${area}`);

// 3. Implement a function isEven that takes an integer as an argument and returns true if it's even, and false otherwise.

function isEven(int) {
    if (int % 2 === 0) {
        console.log(`${int} is an even number`);
    } else {
        console.log(`${int} is not an even number`);
    }
};

isEven(5);

// 4. Create a function reverseString that takes a string as input and returns the reversed string.

let strName = 'Suhaib';

function reverseString(inputStr) {
    return inputStr.split('').reverse('').join('');
}

let reverseName = reverseString(strName);

console.log(reverseName);

// 5. Write a function sumArray that takes an array of numbers and returns the sum of all elements.

let arr = [1, 2, 3, 4, 5];

function sumArray(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum
}

let result = sumArray(arr);

console.log(result);

// 6. Implement a function findMax that takes an array of numbers and returns the maximum value.

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];
console.log(findMax(randomNumbers));

// 7. Create a function capitalize that takes a string and returns the same string with the first letter capitalized.

// 8. Write a function isPalindrome that checks if a given string is a palindrome.

// 9. Implement a function factorial that calculates the factorial of a given number.

// 10. Create a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

// 11. Write a function countOccurrences that takes a string and a target character, and returns the number of occurrences of that character in the string.

// 12. Implement a function mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays.

// 13. Create a function calculatePower that takes a base and an exponent and returns the result of base raised to the exponent.

// 14. Write a function removeDuplicates that takes an array and returns a new array with duplicate values removed.

// 15. Implement a function generateRandomNumber that generates a random number between a given range.

// 16. Create a function calculateTax that takes a salary as input and returns the amount of tax to be paid based on a simple tax rate.

// 17. Write a function isLeapYear that takes a year as a parameter and returns true if it's a leap year, and false otherwise.

// 18. Implement a function truncateString that takes a string and a specified length, and truncates the string if it exceeds the length.

// 19. Create a function arrayToObject that takes two arrays (keys and values) and returns an object where each key-value pair is formed from corresponding elements of the arrays.

// 20. Write a function findCommonElements that takes two arrays and returns a new array containing the common elements between them.