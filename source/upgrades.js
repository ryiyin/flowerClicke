import { incrementCounter, getCounterValue, conterValue } from "./leaf.js";

const powerUp1 = document.querySelector(".powerUp1");
const powerUp2 = document.querySelector(".powerUp2");
const powerUp3 = document.querySelector(".powerUp3");
const costBee = document.querySelector(".cost-bee");
const costGrandma = document.querySelector(".cost-grandma");
const costBusinessman = document.querySelector(".cost-businessman");
const imgBee = document.querySelector(".img-bee");
const imgGrandma = document.querySelector(".img-grandma");
const imgBusinessman = document.querySelector(".img-businessman");

export function upgrade1Logic() {
  let numImg=0

  powerUp1.addEventListener("click", () => {
    if (getCounterValue() >= costBee.textContent) {
      let cost = costBee.textContent;
      incrementCounter(0.2, conterValue().textContent - cost);
      conterValue().textContent = conterValue().textContent - cost;
      costPercent(cost, costBee, 0.13);
      introduceImage(numImg,"bee")
      numImg++
    }

    
  });
}

export function upgrade2Logic() {
  let numImg=0

  powerUp2.addEventListener("click", () => {
    if (getCounterValue() >= costGrandma.textContent) {
      let cost = costGrandma.textContent;
      incrementCounter(2, conterValue().textContent - cost);
      conterValue().textContent = conterValue().textContent - cost;
      costPercent(cost, costGrandma, 0.16);
      introduceImage(numImg,"grandma")
      numImg++
    }
  });
}

export function upgrade3Logic() {
  let numImg=0
  
  powerUp3.addEventListener("click", () => {
    if (getCounterValue() >= costBusinessman.textContent) {
      let cost = costBusinessman.textContent;
      incrementCounter(16, conterValue().textContent - cost);
      conterValue().textContent = conterValue().textContent - cost;
      costPercent(cost, costBusinessman, 0.22);
      introduceImage(numImg,"businessman")
      numImg++
    }
  });
}

let costPercent = (n, upgrade, percent) => {
  let cost = n;
  let resutl = Math.ceil(cost * percent) + parseInt(cost);
  upgrade.textContent = resutl;
  return resutl;
};

function introduceImage(n,character) {
  if (n < 24) {
    const newImage = document.createElement("img");
    newImage.src = `/media/${character}.png`;
    newImage.alt = `${character}`;
    newImage.style.width = "50px";
    newImage.style.height = "50px";

  if (character==="bee") {
    imgBee.appendChild(newImage);
  }
  if (character==="grandma") {
    imgGrandma.appendChild(newImage);
  }
  if (character==="businessman") {
    imgBusinessman.appendChild(newImage);
  }
    
    n++;
  }
}