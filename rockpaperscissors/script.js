"use strict";

// KONSTANTER
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

// VARIABLER
let userGuess;
let computerGuess;
let randomNum;
let result;

// Eventlisteners til knap-klik
rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

// Funktioner som ændre userGuess variable, alt efter hvad der er klikket på
function rockClicked() {
  console.log("rockClicked");
  userGuess = "rock";

  prepGame();
}
function paperClicked() {
  console.log("paperClicked");

  userGuess = "paper";
  prepGame();
}
function scissorsClicked() {
  console.log("scissorsClicked");

  userGuess = "scissors";
  prepGame();
}

// Funktion som forbereder spillet
function prepGame() {
  // Nulsstiller alle classes
  player1.classList = "";
  player2.classList = "";
  draw.classList = "";
  win.classList = "";
  lose.classList = "";

  // Sætter 'grund'-classes på igen
  player1.classList.add("player");
  player2.classList.add("player");
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  // Genere et tilfældigt tal mellem 1-3
  randomNum = Math.floor(Math.random() * 3) + 1;
  console.log("Random number is: ", randomNum);

  computerGuesses();
}

// Definere computerguess, ud fra det tilfældige tal
function computerGuesses() {
  if (randomNum === 1) {
    computerGuess = "rock";
  }
  if (randomNum === 2) {
    computerGuess = "paper";
  }
  if (randomNum === 3) {
    computerGuess = "scissors";
  }

  console.log("ComputerGuess is: ", computerGuess);
  console.log("Userguess is: ", userGuess);

  // starter shake-animationer
  player1.classList.add("shake");
  player2.classList.add("shake");

  // Når animationen er slut, fortsættes til næste funktion
  player1.addEventListener("animationend", player1Hand);
  player2.addEventListener("animationend", player2Hand);
}

// Ændre hånd-illustration alt efter hvad BRUGEREN har klikket på
function player1Hand() {
  if (userGuess === "paper") {
    player1.classList.add("paper");
  }
  if (userGuess === "scissors") {
    player1.classList.add("scissors");
  } else {
  }
  whoWins();
}

// Ændre hånd-illustration alt efter hvad COMPUTEREN har valgt (tilfældigt tal)
function player2Hand() {
  if (computerGuess === "paper") {
    player2.classList.add("paper");
  }
  if (computerGuess === "scissors") {
    player2.classList.add("scissors");
  } else {
  }
  whoWins();
}

// Tjekke om brugeren har vunder, tabt eller om det er uafgjort
function whoWins() {
  if (userGuess === computerGuess) {
    result = "draw";
    draw.classList.remove("hidden");
    console.log("Its a draw");
  }
  if ((userGuess === "paper" && computerGuess === "rock") || (userGuess === "rock" && computerGuess === "scissors") || (userGuess === "paper" && computerGuess === "scissors") || (userGuess === "scissors" && computerGuess === "paper")) {
    result = "win";
    win.classList.remove("hidden");
    console.log("You win");
  }
  if ((userGuess === "scissors" && computerGuess === "rock") || (userGuess === "rock" && computerGuess === "paper")) {
    result = "lose";
    lose.classList.remove("hidden");
    console.log("You lose");
  }

  resetGame();
}

//Fjerne shake-class - virker ikke hvis jeg fjerne dette, forstår ikke helt hvorfor, når jeg ellers har prepGame()...
function resetGame() {
  console.log("resetGame");

  player1.classList.remove("shake");
  player2.classList.remove("shake");
}
