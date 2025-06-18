// Generate the "random" computer output
// We have 1 of 3 choices, so we will use a randomly generated number from 1 to 3
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 3);
console.log(rndInt);
// With this number we have to make the 3 cases for the computer

const computerHand = randomHand(rndInt);

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
console.log(computerHand);

// Then we will need to compare it against the user input
// First we get the user input
let person = prompt("Rock, paper, scissors!");
console.log(person);
// Then we create the compare logic
// Rock beats scissors, scissors beats paper, paper beats rock
function rockPaperScissors(computerHand, person) {}
// Decide which one is the winner, which one is the loser, and have a case for ties aswell
