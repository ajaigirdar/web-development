/*

let valid_input = false;
let num_rolls, input;

while(!valid_input) {
    input = window.prompt("How many dice rolls should we make?");

    num_rolls = Number(input);

    if(num_rolls != NaN && num_rolls > 0) {
        valid_input = true;
    }
}

let rolls = [];

for(let i = 0; i < 11; i++) {
    rolls.push(0);
}

let die1, die2, roll;

for(let i = 0; i < num_rolls; i++) {
    // roll dice
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;

    roll = die1 + die2;
    // add one to count at the right index for the roll (-2)
    rolls[roll-2]++;
}

console.log(`We rolled the dice ${num_rolls} times...`);
for(let i = 0; i < rolls.length; i++) {
    let num = i+2;
    let count = rolls[i];
    let pct = Math.round(count / num_rolls * 100);

    console.log(`${num} was rolled ${count} times (${pct}%)`)
}

*/


// Lesson:

/*
read input from User
validate input
generate random dice rolls
add results to an array
print results
*/ 


let num_rolls, input;

let valid_input = false;

while(isNaN(num_rolls) || num_rolls < 0 || num_rolls === undefined) {
    input = window.prompt("How many dice rolls should we make?");
    num_rolls = Number(input);
    console.log(num_rolls);
}

let rolls = [0,0,0,0,0,0,0,0,0,0,0,0,0];

let die1, die2, roll;

// loop through the number of rolls
for(let i = 0; i < num_rolls; i++) {
    // roll the dice
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;

    // console.log(die1, "---", die2);

    // add dice rolls together
    roll = die1 + die2;

    // add one to count at the right index for the roll (-2)
    rolls[roll]++;

}

console.log(`We rolled the dice ${num_rolls} times...`);

// loop 2-12

for(let i = 2; i < rolls.length; i++) {
    let num = i;
    let count = rolls[i];
    let percentage = Math.round(count / num_rolls * 100);

    console.log(`${num} was rolled ${count} times (${percentage}%)`)
}

console.log("end")

