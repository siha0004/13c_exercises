const list = document.querySelector("ul");

const valueArray = [];

setInterval(generateBars, 1000);

function generateBars() {
  const ranNum = Math.floor(Math.random() * 100);

  if (valueArray.length >= 4) {
    valueArray.shift();
    list.removeChild(list.firstChild); //
  }

  valueArray.push(ranNum);
  console.log("Value array", valueArray);

  const li = document.createElement("li");
  li.style.setProperty("--height", ranNum);
  list.appendChild(li);
}
