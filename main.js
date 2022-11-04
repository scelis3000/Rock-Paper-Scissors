const choices = ["rock", "paper", "scissors"];
const winners = [];
//play game
//play five rounds
//console based
function game() {
  for (let i = 0; i <= 4; i++) {
    playRound(i);
  }
  //document means everything including JavaScript, CSS, and HTML
  document.querySelector("Button").textContent = "Play New Game";
  logWins();
}
function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  //console.log(computerSelection);
  const winner = checkWinner(playerSelection, computerSelection);
  //console.log(winner);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);

  //now start comparing against each other
}
function playerChoice() {
  //get input from player
  let input = prompt("Type Rock, Paper, or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper, or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    //will continuous run until check becomes true, so you have check become true throught code; its stuck in this code, won't start over if somebody hits cancel or typres something else in
    input = prompt(
      "Type Rock, Paper, or Scirrsors, Spelling needs to be exact, but capitalization doesn't matter"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLocaleLowerCase();
    check = validateInput(input);
    //this will return either true or false
  }
  return input;
}
function computerChoice() {
  //get random input for computer
  return choices[Math.floor(Math.random() * choices.length)];
}
function validateInput(choice) {
  return choices.includes(choice);
  //when written like this, either returns: true or false
  //otherwise it will return false
}
function checkWinner(choiceP, choiceC) {
  if (choiceP == choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC == "scissor") ||
    (choiceP === "paper" && choiceC == "rick") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("----------------");
}
