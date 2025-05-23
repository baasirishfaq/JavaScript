// number guessing game between 1 and 100

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 4;
let gameOver = false;

while(!gameOver){

   let input = prompt("Guess a number between 1 and 100");
    attempts++;
    input = Number(input);
    if (isNaN(input)) {
        alert("Please enter a valid number.");
        continue;
    }
    if (input < 1 || input > 100) {
        alert("Please enter a number between 1 and 100.");
        continue;
    }
    if (input === randomNumber) {
        alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        gameOver = true;
    } else if (input < randomNumber) {
        alert("Too low! Try again.");
    } else {
        alert("Too high! Try again.");
    }
    if (attempts >= maxAttempts) {
        alert(`Game over! The number was ${randomNumber}.`);
        gameOver = true;
    }
}




