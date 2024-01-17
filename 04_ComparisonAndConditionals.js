// JavaScript Questions for Practice (Comparisons and Conditionals) 

// Comparison Operators:
 
// 1. Compare num1 and num2. Log "Equal" if they are equal, otherwise log "Not equal."

let num1 = 10;

let num2 = 15;

if (num1 === num2) {
    console.log(`${num1} is equal to ${num2}`);
} else {
    console.log(`${num1} is not equal to ${num2}`);
}
 
// 2. Check if str1 is not equal to str2. Log "Strings do not match" if true, otherwise log "Strings match."

let str1 = 'A';

let str2 = 'A';

if (str1 === str2) {
    console.log("Strings match");
} else {
    console.log("Strings do no match");
}

// 3. Determine if value1 is less than value2. Log the result.

let value1 = 10;

let value2 = 15;

if (value1 < value2) {
    console.log("Value1 is less than Value2");
} else {
    console.log("Value2 is greater than Value1");
}

// 4. Compare two boolean values (bool1 and bool2). Log "Both values are true" if both are true, otherwise log "At least one value is false."

let bool1 = true;

let bool2 = false;

if (bool1 === bool2) {
    console.log("Both values are true");
} else {
    console.log("Atleast one value is false");
}

// 5. Check if num1 is strictly less than num2. Log the result.

let number1 = 5;

let number2 = 10;

if (number1 === number2) {
    console.log("number1 is less than number2");
} else {
    console.log("number1 is not less than number2");
}

// Conditional Statements:

// 6. Ask the user to enter their age using prompt. If the age is greater than or equal to 21, log "You are eligible to enter," otherwise log "Sorry, entry is restricted."

let userAge = parseInt(prompt("Enter your age"));

if (userAge >= 21) {
    console.log("You are eligible to enter");
} else {
    console.log("sorry, entry is restricted");
}

// 7. Declare a variable isSunny and set it to true or false. If it's sunny, log "Wear sunglasses," otherwise log "No need for sunglasses."

let isSunny = false;

if (isSunny) {
    console.log("Wear sunglasses");
} else {
    console.log("No need for sunglasses");
}

// 8. Check if a given year is a leap year. Log "Leap year" if true, otherwise log "Not a leap year." (Consider the logic for leap years.)

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

// 9. Declare a variable isWeekend and set it to true or false. If it's the weekend, log "Enjoy your weekend," otherwise log "It's a weekday."

let isWeekend = true;

if (isWeekend) {
    console.log("Enjoy your weekend");
} else {
    console.log("It's a weekday");
}

// 10. Ask the user to enter a number. If it's positive, log "Number is positive," otherwise log "Number is not positive."

let number = parseInt(prompt("Enter a number"));

if (number >= 0) {
    console.log("Number is positive");
} else {
    console.log("Number is not positive");
}

// Combining Comparison and Conditionals:

// 11. Compare score1 and score2. Log "Player 1 wins" if score1 is greater, "Player 2 wins" if score2 is greater, and "It's a tie" if they are equal.

let score1 = 10;

let score2 = 15;

if (score1 > score2) {
    console.log("Player 1 Wins");
} else if (score1 === score2) {
    console.log("It's a tie");
} else {
    console.log("Player 2 Wins");
}

// 12. Determine if a user is eligible for a discount based on their total purchase amount (totalAmount). Log "You qualify for a discount" if the amount is greater than $50, otherwise log "Sorry, no discount."

let totalAmount = 100;

if (totalAmount > 50) {
    console.log("You qualify for a discount");
} else {
    console.log("Sorry, no discount");
}

// 13. Check if a user has both a username (username) and a password (password). Log "Login successful" if both are present, otherwise log "Please enter both username and password."

let userName = prompt("Enter your Username");

let password = prompt("Enter your password");

if (userName && password) {
    console.log("Login successful");
} else {
    console.log("Please enter both username and password");
}

// 14. Compare temperature with a threshold value. Log "Temperature is high" if it's greater than 30, otherwise log "Temperature is normal."

let temperature = 28;

if (temperature > 30) {
    console.log("Temperature is high");
} else {
    console.log("Temperature is normal");
}

// 15. Check if a user has selected a valid option (selectedOption). Log "Option is valid" if it's not null or undefined, otherwise log "Please select a valid option."

let selectedOption = "Chai";

if (selectedOption !== null && selectedOption !== undefined) {
    console.log("Option is valid");
} else {
    console.log("Please select a valid option");
}

// Logical Operators:

// 16. Check if a user is both a premium user (isPremium) and has made a purchase (hasMadePurchase). Log "Premium user with a purchase" if true, otherwise log "Regular user" if either condition is false.

let isPremium = true;

let hasMadePurchase = false;

if (isPremium && hasMadePurchase) {
    console.log("Premium user with a purchase");
} else {
    console.log("Regular user");
}

// 17. Ask the user to enter two numbers. Log "Both numbers are positive" if both are greater than 0, otherwise log "At least one number is not positive."

let userNum1 = parseFloat(prompt("Enter first number"));

let userNum2 = parseFloat(prompt("Enter second number"));

if (userNum1 > 0 && userNum2 > 0) {
    console.log("Both numbers are positive");
} else {
    console.log("Atleast one number is not positive");
}

// 18. Check if a person is eligible for a driving license based on age (age) and having completed a driving course (hasCompletedCourse). Log "Eligible for a driving license" if both conditions are true, otherwise log "Not eligible."

let age = 18;

let hasCompletedCourse = true;

if (age >= 18 && hasCompletedCourse) {
    console.log("Eligible for a driving license");
} else {
    console.log("Not eligible");
}

// 19. Determine if a user is a student (isStudent) and has completed an assignment (hasCompletedAssignment). Log "Student has completed the assignment" if both conditions are true, otherwise log "Either not a student or assignment not completed."

let isStudent = true;

let hasCompletedAssignment = false;

if (isStudent && hasCompletedAssignment) {
    console.log("Student has completed the assignment");
} else {
    console.log("Either not a student or assignment not completed");
}

// 20. Compare a user's input (userInput) with a secret code (secretCode). Log "Access granted" if they match, otherwise log "Access denied."

let userInput = 123;

let secretCode = 123;

if (userInput === secretCode) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}