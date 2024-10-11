document.getElementById('button').addEventListener('click', rollDice);

function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) +1;
    const dice2 = Math.floor(Math.random() * 6) +1;
    document.getElementById('dice1').src = `images/dice${dice1}.png`;
    document.getElementById('dice2').src = `images/dice${dice2}.png`;

    const sum = dice1 + dice2;
    document.getElementById('result').innerText = `You rolled ${dice1} and ${dice2}. Sum: ${sum}`;

    if (dice1 === dice2) {
        document.getElementById('result').innerText += " - Doubles!";
    }
}
