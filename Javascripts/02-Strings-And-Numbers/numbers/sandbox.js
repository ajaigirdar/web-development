// let val;

// val = Math.PI;
// console.log(`The value of PI is ${val}`);

// val = Math.pow(2, 3);
// console.log(`2 to the power of 3 ${val}`);

// val = Math.sqrt(16);
// console.log(`The square root of 16 is ${val}`);

// val = Math.exp(1);
// console.log(`E to the 1st power is ${val}`);

// val = Math.cos(5);
// console.log(`The cosine of 5 is ${val}`);

// val = Math.sin(5);
// console.log(`The sine of 5 is ${val}`);

// val = Math.tan(5);
// console.log(`The tangent of 5 is ${val}`);

// val = Math.round(3.4);
// console.log(`The round of 3.4 is ${val}`);

// val = Math.round(-4.7);
// console.log(`The round of -4.7 is ${val}`);

// val = Math.ceil(3.4);
// console.log(`The celing of 3.4 is ${val}`);

// val = Math.ceil(-4.7);
// console.log(`The celing of -4.7 is ${val}`);

// val = Math.floor(3.4);
// console.log(`The floor of 3.4 is ${val}`);

// val = Math.floor(-4.7);
// console.log(`The floor of -4.7 is ${val}`);

// val = Math.trunc(3.4);
// console.log(`The trunc of 3.4 is ${val}`);

// val = Math.trunc(-4.7);
// console.log(`The trunc of -4.7 is ${val}`);

// val = Math.floor(Math.random() * 20) + 1;
// console.log(`A random number between 1 and 20 is ${val}`);

// val = Math.floor(Math.random() * 50) + 5;
// console.log(`A random number between 5 and 55 is ${val}`);

// Exercise:

// 1.
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 and 100:", randomNum);

// 2. 
console.log("Square root of 144:", Math.sqrt(144));

console.log("3 to the power of 4:", Math.pow(3, 4));

console.log("Absolute value of -25:", Math.abs(-25));

// 3. 
console.log("Math.round(7.8):", Math.round(7.8));

console.log("Math.ceil(7.8):", Math.ceil(7.8));

console.log("Math.floor(7.8):", Math.floor(7.8));

console.log("Math.trunc(7.8):", Math.trunc(7.8));

// 4.
let radians = 45 * (Math.PI / 180);
console.log("Cosine of 45 degrees:", Math.cos(radians));

// Bonus Challenge:

// 1.
let fullName = prompt("Enter your full name:");

// 2.
console.log(`Hello, ${fullName}! Your name has ${fullName.length} characters.`);

// 3.
let luckyNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Did you know? Your lucky number for today is ${luckyNumber}!`);
