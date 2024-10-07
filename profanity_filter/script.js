const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theText = document.querySelector("p").textContent;
let sentenceHasBeenTreated = false;

document.querySelector("button").addEventListener("click", replaceBadWords);

function replaceBadWords() {
  // For hvert element i arrayey, erstatter den det dårlige ord, med det gode.
  // For hvor iteration gemmes den nye sætning, med ét godt ord, i variablen theText
  // Det pakkes ind i en span, så vi kan lave deres baggrundsfarve til gul (stylet med CSS i <head> i DOM'en)

  if (sentenceHasBeenTreated === false) {
    curseWords.forEach((curseWord) => {
      theText = theText.replaceAll(curseWord.bad, `<span>${curseWord.good}</span>`);
    });
    //   console.log(theText);

    // Sætter den nye text ind i dom'en (som innerHTML, fordi span er html. Hvis ikke span skulle med skal man blot bruger textContent)
    document.querySelector("p").innerHTML = theText;
    sentenceHasBeenTreated = true;
  } else {
    document.querySelector("dialog").showModal();
  }
}
