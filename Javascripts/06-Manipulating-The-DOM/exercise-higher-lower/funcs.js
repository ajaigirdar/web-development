

let secretNumber = Math.floor(Math.random() * 20) + 1;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    // if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
    //     message.textContent = "Please enter a number between 1 and 20!";
    //     return;
    // }

    if (userGuess === secretNumber) {
        message.textContent = "🎉 You got it!";
    } else if (userGuess < secretNumber) {
        message.textContent = "❌ No, try a higher number.";
    } else {
        message.textContent = "❌ No, try a lower number.";
    }
}