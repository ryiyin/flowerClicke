import {  getCounterValue } from "./leaf.js";
import {powerUp1,powerUp2,powerUp3,costBee,costGrandma,costBusinessman} from "./upgrades.js"

export function opacityBee(){
  
  if (getCounterValue() < costBee.innerHTML) {
    powerUp1.style.opacity = '0.5'; 
  }else{
    powerUp1.style.opacity = '1'; 
  }
}

export function opacityGrandma(){
  
    if (getCounterValue() < costGrandma.innerHTML) {
      powerUp2.style.opacity = '0.5'; 
    }else{
      powerUp2.style.opacity = '1'; 
    }
  }

export function opacityBusinessman(){
  
    if (getCounterValue() < costBusinessman.innerHTML) {
      powerUp3.style.opacity = '0.5'; 
    }else{
      powerUp3.style.opacity = '1'; 
    }
}

  