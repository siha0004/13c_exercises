"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// sætter variable på dom element "select"
const selector = document.querySelector("select");

// i select-elementet, kigger i array af options(options), tager det "valgte" elememnt (selectedIndex) og aflæser dens værdi (value).
let locale = selector.options[selector.selectedIndex].value;

// Bruger funktionen, så der er noget på sitet fra starten af
switchLang(locale);

// Funktionen som for hvert element der er i arrayet, sætter de forskellige tekster ind i dom'en. Bruger locale som parameter
function switchLang(locale) {
  texts[locale].texts.forEach((elm) => {
    document.querySelector(elm.location).textContent = elm.text;
  });
}

// Lytter på at der sker en ændring i select(dropdown) og så sætter locale-variablen som den nye valgte mulighed.
//Herefter sættes funktionen SwitchLang i gang med den nye værdi for locale
selector.addEventListener("change", (event) => {
  locale = event.target.value;
  switchLang(locale);
});
