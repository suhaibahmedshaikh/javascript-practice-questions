// JavaScript Question for Practice (Variables & DataTypes)

// Variable Declaration and Initialization:

// 1. Declare a variable myName and initialize it with your name.

const myName = "Suhaib Ahmed Shaikh";

// 2. Declare a variable birthYear and initialize it with the year you were born.

const birthYear = 1996;

// 3. Declare a variable currentMonth and initialize it with any integer representing a month (e.g., 1 for January, 2 for February, and so on).

let currentMonth = 1;

// Variable Types and Type Checking:

// 4. Declare a variable isRaining and set it to false.

let isRaining = false;

// 5. Create a variable temperature and set it to a numerical value.

let temperature = 32;

// 6. Check the type of the isRaining variable using typeof.

console.log(typeof(isRaining));

// 7. Check the type of the temperature variable using typeof.

console.log(typeof(temperature));

// String Variables:

// 8. Declare a variable favoriteFood and set it to your favorite dish.

const favoriteFood = "Biryani";

// 9. Create another variable foodDescription by concatenating favoriteFood with " is delicious."

const foodDescription = favoriteFood + " is delicious";

console.log(foodDescription);

// 10. Check the length of the favoriteFood string.

console.log(favoriteFood.length);

// Number Variables:

// 11. Declare a variable myHeight and set it to your height in centimeters.

const myHeight = 186;

// 12. Declare another variable friendHeight and set it to your friend's height.

const friendHeight = 172;

// 13. Calculate the average height between myHeight and friendHeight.

const averageHeight = (myHeight + friendHeight) / 2;

console.log(averageHeight);

// Boolean Variables:

// 14. Declare a variable isSunny and set it to true.

let isSunny = true;

// 15. Declare another variable isWeekend and set it to false.

let isWeekend = false;

// 16. Combine isSunny and isWeekend using the logical AND operator.

let isSunnyAndWeekend = isSunny && isWeekend;

console.log("Is it sunny and the weekend ? " + isSunnyAndWeekend);

// Null and Undefined:

// 17. Declare a variable nullVariable and set it to null.

const nullVariable = null;

console.log(nullVariable);

// 18.Declare another variable undefinedVariable without initializing it.

let undefinedVariable;

console.log(undefinedVariable);

// Variable Reassignment:

// 19. Change the value of currentMonth to the next month.

currentMonth = (currentMonth % 12) + 1;

console.log(currentMonth);

// 20. Update the temperature variable to reflect a temperature increase.

let temperatureIncrease = 5;

temperature = temperature + temperatureIncrease;

console.log("Updated temperature is " + temperature);

// Template Literals:

// 21. Create a template literal that includes myName and birthYear in a sentence.

console.log(`Hello my name is ${myName} and i m born in ${birthYear}`);

// 22. Use a template literal to display the current temperature with a message.

console.log(`Current temperature is ${temperature}`);

// Variable Naming:

// 23. Declare a variable using camelCase for your favorite hobby.

let favoriteHobby = "Cricket";

// 24. Declare another variable using snake_case for your preferred programming language.

let programming_language = "JavaScript";

// Variable Concatenation:

// 25. Declare two variables, firstName and lastName, and concatenate them into a single variable fullName.

const firstName = "Suhaib Ahmed";

const lastName = "Shaikh";

const fullName = firstName + " " + lastName;

console.log("My full name is " + fullName);

// 26. Create a variable greeting by combining fullName with " says hello!"

console.log(fullName + " says hello!");