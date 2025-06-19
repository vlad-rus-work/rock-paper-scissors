// Global variables
let humanScore = 0;
let computerScore = 0;
let rounds = 1;

// Generate the "random" computer output
// We have 1 of 3 choices, so we will use a randomly generated number from 1 to 3
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let rndInt = randomIntFromInterval(1, 3);
// With this number we have to make the 3 cases for the computer

function randomHand(rndInt) {
  switch (rndInt) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

// Then we will need to compare it against the user input
// First we get the user input, and make it case-insensitive
// let userInput = prompt("Rock, paper, scissors!");
function getHumanChoice() {
  return (userInput = prompt("Rock, paper, scissors!")).toLowerCase();
}
// console.log(getHumanChoice());

// Then we create the compare logic
function playRound() {
  rndInt = randomIntFromInterval(1, 3);
  let computer = randomHand(rndInt);
  console.log(computer);
  let player = getHumanChoice();
  if (computer === player) return "Draw!";
  if (computer === "rock" && player === "scissors") {
    computerScore++;
    return "You lose! Rock beats scissors.";
  }
  if (computer === "scissors" && player === "paper") {
    computerScore++;
    return "You lose! Scissors beats paper.";
  }
  if (computer === "paper" && player === "rock") {
    computerScore++;
    return "You lose! Paper beats rock.";
  }
  if (player === "rock" && computer === "scissors") {
    humanScore++;
    return "You win! Rock beats scissors.";
  }
  if (player === "scissors" && computer === "paper") {
    humanScore++;

    return "You win! Scissors beats paper.";
  }
  if (player === "paper" && computer === "rock") {
    humanScore++;
    return "You win! Paper beats rock.";
  }
}

while (rounds <= 5) {
  rounds++;
  playRound();
  console.log(humanScore, computerScore);
}

// Rock beats scissors, scissors beats paper, paper beats rock
// Decide which one is the winner, which one is the loser, and have a case for ties aswell
