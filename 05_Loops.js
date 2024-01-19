// JavaScript Questions for Practice (Loops)

// For Loops:

// 1. Write a for loop that prints even numbers from 2 to 20.

for (let i = 2; i <= 20; i++) {
    console.log(i);
}

// 2. Use a for loop to iterate through an array (numbers) and calculate the sum of all elements.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// 3. Create a program that prints the square of numbers from 1 to 5 using a for loop.

for(let i = 1; i <= 5; i++) {
    let square = i * i;
console.log(`The Square of ${i} is ${square}`);
}

// 4. Write a for loop that iterates in reverse, printing even numbers from 10 to 2.

for(let i = 10; i >= 2; i -= 2) {
    console.log(`${i} is an even number`);
}

// 5. Use a for loop to iterate through a string (word) and log each character in reverse order.

let str = 'Hello';

for(let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

// While Loops:

// 6. Implement a while loop that prints odd numbers up to 15.

let num = 1;

while (num <= 15) {
    console.log(num);
    num += 2;
}
 
// 7. Create a program using a while loop to find the product of numbers from 1 to 5.

let counter = 1;

let product = 1;

while (counter <= 5) {
    product *= counter;
    counter++
}

console.log(`The product of numbers from 1 to 5 is ${product}`);
 
// 8. Write a while loop that calculates the sum of squares of numbers from 1 to 10.

let count = 1;

let sumOfSqr = 0;

while (count <= 10) {
    let square = count * count;
    console.log(`The Square of number ${count} is ${square}`);
    count++;
    sumOfSqr += square;
}

console.log(`The sum of squares pf numbers from 1 to 10 is ${sumOfSqr}`);

// 9. Implement a program that counts up by 5 from 5 to 50 using a while loop.

let countUp = 0;

while (countUp < 50) {
    countUp += 5;
    console.log(countUp);
}

// Nested Loops:

// 10. Create a multiplication table for numbers 1 to 5 using nested for loops.

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        let table = i * j
        console.log(`${i} * ${j} = ${table}`);
    }
    console.log("--------");
}

// 11. Write nested loops to generate a pattern, such as a right-angled triangle or a square.

const counts = 5;

for (let i = 1; i <= counts; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

// 12. Create a program that generates a multiplication table for numbers 2 to 4 using nested while loops.


for (let i = 2; i <= 4; i++) {
    for (let j = 1; j <= 5; j++) {
        let table = i * j
        console.log(`${i} * ${j} = ${table}`);
    }
    console.log("--------");
}


// Loop Control Statements:

// 13. Use the break statement to exit a for loop when a certain condition is met.

const numbers1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] > 10 && numbers1[i] % 2 === 0) {
    console.log(`The first even number greater than 10 is: ${numbers1[i]}`);
    break;
  }
}

// 14. Implement a while loop that skips multiples of 3 using the continue statement.

let number = 1;

while (number <= 10) {
  if (number % 3 === 0) {
    number++;
    continue;
  }
  console.log(number);
  number++;
}