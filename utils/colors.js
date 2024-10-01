import { getRandomNumber } from "./numbers";

export function getRandomColor() {
  return `hsl( ${getRandomNumber(360)} 50% 50%)`;
}
