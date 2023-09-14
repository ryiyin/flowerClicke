import {  getCounterValue } from "./leaf.js";
import {powerUp1,powerUp2,powerUp3,costBee,costGrandma,costBusinessman} from "./upgrades.js"

export function opacityBee(){
  
  if (getCounterValue() < costBee.innerHTML) {
    powerUp1.style.opacity = '0.5'; 
    powerUp1.style.background = "rgb(108, 99, 133)";
  }else{
    powerUp1.style.opacity = '1'; 
    powerUp1.style.background = "rgb(139, 93, 224)";
  }
}

export function opacityGrandma(){
  
    if (getCounterValue() < costGrandma.innerHTML) {
      powerUp2.style.opacity = '0.5'; 
      powerUp2.style.background = "rgb(108, 99, 133)";
    }else{
      powerUp2.style.opacity = '1'; 
      powerUp2.style.background = "rgb(139, 93, 224)";
    }
  }

export function opacityBusinessman(){
  
    if (getCounterValue() < costBusinessman.innerHTML) {
      powerUp3.style.opacity = '0.5'; 
      powerUp3.style.background = "rgb(108, 99, 133)";
    }else{
      powerUp3.style.opacity = '1'; 
      powerUp3.style.background = "rgb(139, 93, 224)";
    }
}

  