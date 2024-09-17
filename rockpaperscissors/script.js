"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// const players = document.querySelector(".player");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

let userGuess;
let computerGuess;
let randomNum;
let result;

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

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

function prepGame() {
  player1.classList = "";
  player2.classList = "";
  draw.classList = "";
  win.classList = "";
  lose.classList = "";

  player1.classList.add("player");
  player2.classList.add("player");
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  randomNum = Math.floor(Math.random() * 3) + 1;
  console.log("Random number is: ", randomNum);

  computerGuesses();
}

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

  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", player1Hand);
  player2.addEventListener("animationend", player2Hand);
}

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

function resetGame() {
  console.log("resetGame");

  player1.classList.remove("shake");
  player2.classList.remove("shake");
}
