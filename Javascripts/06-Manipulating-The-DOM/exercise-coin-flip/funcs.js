

function flipCoin(userGuess) {
    let coinFlip = ["Heads", "Tails"][Math.floor(Math.random() * 2)];

    let resultMessage = `Coin landed on: ${coinFlip}. `;

    if (userGuess === coinFlip) {
        resultMessage += `🎉 You guessed it right!`;
    } else {
        resultMessage += `❌ Sorry, try again!`;
    }

    document.getElementById("result").textContent = resultMessage;
}