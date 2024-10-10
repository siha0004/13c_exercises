const body = document.querySelector("body");
const btn = document.querySelector("button");

// Lytter på forskellige evnts
body.addEventListener("animationend", delegateEvent);
body.addEventListener("click", delegateEvent);
body.addEventListener("mouseover", delegateEvent);

// I udgangspunktet har musen ikke flyttet sig
let mouseMoved = false;

function delegateEvent(event) {
  const type = event.type;

  // Hvis man flytter musen
  if (type === "mouseover") {
    mouseMoved = true;
    // Udfylder knappen helt
    btn.style.setProperty("background-size", "100%");
  }
  if (type === "click") {
    // Åbner et nyt vindue
    window.location.href = "https://www.netflix.com";
  }
  if (type === "animationend") {
    // Hvis animationen er slut og man mousemoved = false (ikke har flyttet sig)
    if (!mouseMoved) {
      // Åbner et nyt vindue
      window.location.href = "https://www.netflix.com";
    }
  }
}
