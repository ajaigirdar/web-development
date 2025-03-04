let x = 10;
let y = 5;

console.log(x + y);

console.log(x - y);

console.log(x * y);

console.log(x / y);

y = 3;
console.log(x % y);

let a = .5, b = 7, c = "Some string";
console.log(a, b, c);


let name = "John";
console.log(name);

// String functions

let testString = "\"the horse\"";
let testString2 = '"the horse"';
console.log(testString, testString2);
console.log(testString.length);

let testStringLength = testString.length;
console.log(testStringLength);

let position = 5;
console.log("character at position", position, "is", testString.charAt(position));

console.log(testString.indexOf("rs"));

let horseIndex = testString.indexOf("horse");
let animal = testString.substring(horseIndex, horseIndex + 5);
console.log(horseIndex, animal);

let testString3 = testString2.replaceAll('"', "exciting");
console.log(testString3);


// Using Math

let number = 1.5;
console.log(Math.PI);
console.log(Math.abs(-7));
console.log(Math.floor(number), Math.ceil(number), Math.round(number));
console.log(Math.random());
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.hypot(10, 10));
console.log(123.123333.toFixed(2));
console.log(123.123333.toPrecision(2));
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 3));