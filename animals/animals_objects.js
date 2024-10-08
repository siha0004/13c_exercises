"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  // For hvert element i det oprindelige array
  jsonData.forEach((jsonObject) => {
    // Splitter fullname-værdien fra det oprindelige array ved mellemrummende
    const texts = jsonObject.fullname.split(" ");

    // Laver et nyt object, hvor jeg bruger de nu splittede strenge, og indsætter på deres respektive pladser, i mit nye object
    const animal = { name: texts[0], desc: texts[2], type: texts[3], age: jsonObject.age };

    // Pusher dette nye objekt op i allAnimals-arrayet
    allAnimals.push(animal);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
