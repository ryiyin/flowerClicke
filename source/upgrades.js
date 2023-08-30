import { incrementCounter, getCounterValue, conterValue } from "./leaf.js";

const powerUp1 = document.querySelector(".powerUp1");
const powerUp2 = document.querySelector(".powerUp2");
const powerUp3 = document.querySelector(".powerUp3");
const numberSeeds =[]

export function upgrade1Logic(n) {
  powerUp1.addEventListener("click", () => {
    if (getCounterValue() >=n ) {
      incrementCounter(0.2, conterValue().textContent - n);
      conterValue().textContent = conterValue().textContent - n;
    }
  });
}

export function upgrade2Logic() {
  powerUp2.addEventListener("click", () => {
    if (getCounterValue() >= 50) {
      incrementCounter(2, conterValue().textContent - 50);
      conterValue().textContent = conterValue().textContent - 50;
    }
  });
}

export function upgrade3Logic() {
  powerUp3.addEventListener("click", () => {
    if (getCounterValue() >= 550) {
      incrementCounter(16, conterValue().textContent - 550);
      conterValue().textContent = conterValue().textContent - 550;
    }
  });
}
