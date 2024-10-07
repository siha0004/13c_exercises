const pointer = document.querySelector("body");
const select = document.querySelector("select");

// i select-elementet, kigger i array af options(options), tager det "valgte" elememnt (selectedIndex) og aflæser dens værdi (value).
let themeValue = select.options[select.selectedIndex].value;
// Benytter det tema som er valgt, og farver siden efter dette
change(themeValue);

// Lytter på ændringer i dropdownmenuen og starter funktionen change, så de nye farver bliver brugt
select.addEventListener("change", (event) => {
  themeValue = event.target.value;
  change(themeValue);
});

// Functionen som skifter farven
// Sætter data-attributten lig den farve som er valgt i dropdownmenuen.
function change() {
  if (themeValue === "spring") {
    pointer.dataset.theme = "spring";
  } else if (themeValue === "light") {
    pointer.dataset.theme = "light";
  } else {
    pointer.dataset.theme = "dark";
  }
}
