const pointer = document.querySelector("body");
const select = document.querySelector("select");

let themeValue = select.options[select.selectedIndex].value;
change(themeValue);

select.addEventListener("change", (event) => {
  themeValue = event.target.value;
  change(themeValue);
});

function change() {
  if (themeValue === "spring") {
    pointer.dataset.theme = "spring";
  } else if (themeValue === "light") {
    pointer.dataset.theme = "light";
  } else {
    pointer.dataset.theme = "dark";
  }
}
