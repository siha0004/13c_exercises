const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const btnAll = document.querySelector(".all");
const btnElectric = document.querySelector(".elcetric");
const btnElectricJonas = document.querySelector(".elcetricJonas");
const btn1plus = document.querySelector(".one_plus");
const btn2plus = document.querySelector(".two_plus");

// Funktion som viser tabellen
showTheseVehicles(vehicles);

// btnAll.addEventListener("click", showTheseVehicles(vehicles));
btnElectric.addEventListener("click", () => {
  showTheseVehicles(allElectricArr);
});
btnElectricJonas.addEventListener("click", () => {
  showTheseVehicles(allElectricJonas);
});
btn1plus.addEventListener("click", () => {
  showTheseVehicles(allRyeOnePlus);
});
btn2plus.addEventListener("click", () => {
  showTheseVehicles(allMoreSeatsThanTwo);
});

// Gemme arrayes, hvor jeg bruger filtrering
const allElectricArr = vehicles.filter(isVehicleElectric); // console.log("All electric", allElectricArr);
const allMoreSeatsThanTwo = vehicles.filter(moreThanTwoSeats);
const allElectricJonas = vehicles.filter(isElectricJonas);
const allRyeOnePlus = vehicles.filter(isRyeOnePlus);

//FILTRERINGSFUKTIONER
// Alle elektriske
function isVehicleElectric(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}

// Alle med 2+ sæder
function moreThanTwoSeats(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}
// Alle elektriske ejet af Jonas
function isElectricJonas(vehicle) {
  if (vehicle.isElectric === true && vehicle.ownedBy === "Jonas") {
    return true;
  }
}

// Alle rugbrødsmotor med 1+ sæder
function isRyeOnePlus(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  }
}

//Funktion der laver tabbelsen
function showTheseVehicles(arr) {
  // Slet hvad der er i den
  tbodyPointer.innerHTML = "";
  //Tilføj indhold ud fra array som modtages
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${pretty(each.type)}</td>
  <td>${pretty(each.fuel)}</td>
  <td>${pretty(each.passengers)}</td> 
  <td>${pretty(each.stops)}</td> 
  <td>${pretty(each.ownedBy)}</td> 
  <td>${pretty(each.isElectric)}</td>
  <td>${pretty(each.isTandem)}</td>
</tr>`;
  });
}

<td>${pretty(each.ownedBy)}</td>;

//Funktion som gør ting smukkere
function pretty(word) {
  if (word === true) {
    return "X";
  } else if (word === undefined) {
    return "";
  } else {
    return word;
  }
}

//  ${each.stops ? `<td>${each.stops}</td>` : `<td> - </td>`}

// <td> ${each.ownedBy ? ${each.ownedBy} : ´-´} </td>
