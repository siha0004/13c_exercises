export function fetchUrl(url) {
  return fetch(url).then((response) => response.json());
}

// SÅDAN KAN BRUGE FUNKTIONEN I PRAKSIS
// function randomFunc {
//     const data = await fetchUrl("https://");
// }
