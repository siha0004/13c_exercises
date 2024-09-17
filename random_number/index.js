function randomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);

  document.querySelector("#container").innerText = randomNumber;
}

randomNumber();
