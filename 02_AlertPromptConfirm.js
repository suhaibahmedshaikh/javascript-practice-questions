// JavaScript Questions for Practice (Alert, Prompt & Confirm)

// Alert: 

// 1. Use alert to display a message saying "Hello, welcome to JavaScript!" 

alert("Hello, Welcome to JavaScript!");

// Prompt: 

// 2. Use prompt to ask the user for their name and store the result in a variable.

let userName = prompt("Enter your Username");

// 4. Combine the result of a prompt with a string to create a sentence, then use alert to display the sentence. 

let displayMessage = userName + " " + "Welcome to JavaScript Practice Question Series";

alert(displayMessage);

// Confirm: 

// 5. Use confirm to ask the user if they are 18 years or older and store the result in a variable. 

let isEighteenYear = confirm("Are you 18 year or older");

// 6. Based on the result of confirm, use alert to display a message like "Access granted" or "Access denied." Combining Interactions:

if(isEighteenYear){
    alert("Access Granted");
} else {
    alert("Access Denied");
}

// 7. Use a combination of prompt and confirm to gather information about the user's age and whether they have a driver's license.

let userAge = parseInt(prompt("Enter your age"));

let hasDriversLicense = confirm("Do you have a driver's license?");


// 8. Display a message using alert based on the collected information, such as "You are eligible for a driver's license" or "Sorry, you are not eligible."


if (userAge >= 18 && !hasDriversLicense) {
    alert("You are eligible for a driver's license!");
} else if (userAge >= 18 && hasDriversLicense) {
    alert("You already have a driver's license, Happy Journey.");
} else {
    alert("You are not eligible for a driver's license.");
}
