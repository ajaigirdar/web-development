// let num = get_number("Enter the number of rolls.");

// let results = roll_dice(num);

// log_results(num, results);






// code-along

function roll(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}

function log_roll (die) {
    console.log(`You rolled a ${die}`);
}

log_roll(roll());

// get_input(prompt) get user input and validate it

get_input()
let num_rolls, input;

let valid_input = false;

while(isNaN(num_rolls) || num_rolls < 0 || num_rolls === undefined) {
    input = window.prompt("How many dice rolls should we make?");
    num_rolls = Number(input);
    console.log(num_rolls);
}



// initialize_rolls() initialize roll storage array
function initialize_rolls(die = 6) {
    let rolls = [];
    for(let i = 0; i < (die * 2 +1 ); i++) {
        rolls.push(0);
    }
    return rolls;
}

console.log(initialize_rolls());
console.log(initialize_rolls(4));
console.log(initialize_rolls(8));

// roll