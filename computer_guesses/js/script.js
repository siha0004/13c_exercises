const start = document.querySelector(".start");
const low = document.querySelector(".low");
const high = document.querySelector(".high");
const correct = document.querySelector(".correct");

// Spilleren klikker på knappen "start game"
start.addEventListener("click", gameStart);
low.addEventListener("click", lowGuess);
high.addEventListener("click", highGuess);
correct.addEventListener("click", correctGuess);

// Computeren gætter på et tal som skrives i dom'en
let numberOfComGuesses = 0;
let highNum = 100;
let lowNum = 0;
let comGuess;
let newGuess;
let interval;

function gameStart() {
  interval = highNum - lowNum;
  comGuess = interval / 2;
  console.log("game start comGuess:", comGuess);

  // Spilleren klikker på én af de tre knapper
}

// Det er ikke længere muligt at klikke på "start game"

// *** Hvis tallet er for højt ***
function highGuess() {
  highNum = comGuess;
  console.log("Nyt højst muligt tal", highNum);
  interval = highNum - lowNum;
  console.log("interval", interval);
  comGuess = highNum - interval / 2;
  console.log("Nyt gæt", comGuess);
}

// *** Hvis tallet er for lavt ***
function lowGuess() {
  // Diffinere det lavest mulige tal, som computer gættet, da det aldrig kan blive lavere)
  lowNum = comGuess;
  console.log("Nyt lavest muligt tal", lowNum);
  // Laver et nyt interval, som spænder
  interval = highNum - lowNum;
  comGuess = lowNum + interval / 2;
  console.log("Nyt gæt", comGuess);
}
// Tag det eksisterende gæt og læg halvdelen til

// *** Hvis tallet er korrekt ***
function correctGuess() {
  // Udskriv tillykke til computeren
  // Sluk for knapperne
  // Tænd for "start game"
}
