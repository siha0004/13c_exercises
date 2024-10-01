import { $ } from "../utils/dom.js";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

$("button").addEventListener("click", () => {
  return createBc(bc);
});

function createBc(arr) {
  $("nav").innerHTML = "";

  arr.forEach((each) => {
    $("nav").innerHTML += `${arr.indexOf(each) === arr.length - 1 ? `<p>${each.name}<p>` : `<a href="${each.link}">${each.name}</a> /`} 
          
        `;
  });
}

function lastCrumb(element) {}
