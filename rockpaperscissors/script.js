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

  randomNumber();
}
function paperClicked() {
  console.log("paperClicked");

  userGuess = "paper";
  randomNumber();
}
function scissorsClicked() {
  console.log("scissorsClicked");

  userGuess = "scissors";
  randomNumber();
}

function randomNumber() {
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

  player1.addEventListener("animationend", whoWins);
}

function whoWins() {
  if (userGuess === computerGuess) {
    result = "draw";
    draw.classList.remove("hidden");
    console.log("Its a draw");
  }
  if ((userGuess === "paper" && computerGuess === "rock") || (userGuess === "rock" && computerGuess === "scissors") || (userGuess === "rock" && computerGuess === "paper")) {
    result = "win";
    win.classList.remove("hidden");
    console.log("You win");
  }
  if ((userGuess === "scissors" && computerGuess === "rock") || (userGuess === "paper" && computerGuess === "scissors") || (userGuess === "scissors" && computerGuess === "paper")) {
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
  player1.removeEventListener("animationend", whoWins);
}
