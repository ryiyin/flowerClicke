import { leafCounter } from "./leaf.js";
import { leafZoom } from "./leaf.js";
import { upgrade1Logic } from "./upgrades.js";
import { upgrade2Logic } from "./upgrades.js";
import { upgrade3Logic } from "./upgrades.js";
import { incrementCounter } from "./leaf.js";


const costBee = document.querySelector(".cost-bee");


leafCounter();
leafZoom();
upgrade1Logic();
upgrade2Logic();
upgrade3Logic();


/* localStorage.setItem("miDato", "Este es mi valor");

var datoRecuperado = localStorage.getItem("miDato");
localStorage.removeItem("miDato");

console.log(datoRecuperado) */