import { incrementCounter, getCounterValue, conterValue } from "./leaf.js";

const powerUp1 = document.querySelector(".powerUp1");
const powerUp2 = document.querySelector(".powerUp2");
const powerUp3 = document.querySelector(".powerUp3");
const costBee = document.querySelector(".cost-bee");
const costGrandma = document.querySelector(".cost-grandma");
const costBusinessman = document.querySelector(".cost-businessman");
const imgBee = document.querySelector(".img-bee");

export function upgrade1Logic() {
  powerUp1.addEventListener("click", () => {
    if (getCounterValue() >= costBee.textContent) {
      let cost = costBee.textContent;
      incrementCounter(0.2, conterValue().textContent - cost);
      conterValue().textContent = conterValue().textContent - cost;
      costPercent(cost, costBee, 0.13);
    }

    const newImage = document.createElement('img');
    newImage.src = '/media/bee.png'; 
    newImage.alt = 'bee';
    newImage.style.width = '50px';
    newImage.style.height = '50px';
    
    imgBee.appendChild(newImage);
  });
}

export function upgrade2Logic() {
  powerUp2.addEventListener("click", () => {
    if (getCounterValue() >= costGrandma.textContent) {
      let cost = costGrandma.textContent;
      incrementCounter(2, conterValue().textContent - cost);
      conterValue().textContent = conterValue().textContent - cost;
      costPercent(cost, costGrandma, 0.16);
    }
  });
}

export function upgrade3Logic() {
  powerUp3.addEventListener("click", () => {
    if (getCounterValue() >= costBusinessman.textContent) {
      let cost = costBusinessman.textContent;
      incrementCounter(16, conterValue().textContent - cost);
      conterValue().textContent = conterValue().textContent - cost;
      costPercent(cost, costBusinessman, 0.22);
    }
  });
}

let costPercent = (n, upgrade, percent) => {
  let cost = n;
  let resutl = Math.ceil(cost * percent) + parseInt(cost);
  upgrade.textContent = resutl;
  return resutl;
};
