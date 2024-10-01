import { $, $$ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";

const button = $("button");
// const button = document.querySelector("button");
const input = document.querySelector("#number").value;

//Lyt efter et gæt
$("button").addEventListener("click", randomNumber);

// Generer et tilfældigt tal
const number = getRandomNumber(3);

function randomNumber() {
  console.log(number);

  // Med if/else, tjek om (bruger input =  genereret tal)
  if (number == input) {
    console.log("Tillykke");
  } else {
    console.log("Prøv igen");
  }
  // document.querySelector("#container").innerText = randomNumber;
}

randomNumber();

// False = Gæt igen, kør igennem loop igen.
// True = Vis gif. Nulstil knap, så man kan spille igen
