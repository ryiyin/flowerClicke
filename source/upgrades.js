import { incrementCounter, getCounterValue } from "./leaf.js";

const powerUp1 = document.querySelector(".powerUp1");
const powerUp2 = document.querySelector(".powerUp2");

export function upgrade1Logic() {
  powerUp1.addEventListener("click", () => {
    /* setInterval(() => { */
    incrementCounter(1);
    /*       conterValue().textContent = getCounterValue(); */
    /* }, 1000); */
  });
}

export function upgrade2Logic() {
  powerUp2.addEventListener("click", () => {
    /* setInterval(() => { */
    incrementCounter(2);
    /*       conterValue().textContent = getCounterValue();
    }, 1000); */
  });
}
