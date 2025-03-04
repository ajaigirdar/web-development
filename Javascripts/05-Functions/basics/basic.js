// function average() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum / arguments.length;
// }

// console.log("Average of numbers: ", average(1, 2, 3, 4, 5)); 



// Exercise:

// Part 1: Function Basics

function greetUser(user) {
    console.log(`Hello, ${user}!`);
}

greetUser("John");
greetUser("Jane");

// Part 2: Returning Values

function squareNumber(number) {
    return number * number;
}

let squaredFour = squareNumber(4);
let squaredSeven = squareNumber(7);

console.log("Squared 4: ", squaredFour);
console.log("Squared 7: ", squaredSeven);

// Part 3: Multiple Parameters 

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(10, 5));
console.log(addNumbers(3, 18));

// Part 4: Random Color Generator

let colors = ["red", "blue", "green", "yellow", "purple", "orange"];

function getRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

console.log("Random Color: ", getRandomColor());
console.log("Random Color: ", getRandomColor());
console.log("Random Color: ", getRandomColor());

// Part 5: Random Fortune Teller

let fortunes = [
    "You will have a great day!",
    "A surprise is waiting for you.",
    "Something exciting is coming soon.",
    "Be cautious with your decisions today.",
    "Happiness is around the corner."
   ];

   function tellFortune() {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
   }

   console.log("Fortune: ", tellFortune());
   console.log("Fortune: ", tellFortune());
   console.log("Fortune: ", tellFortune());