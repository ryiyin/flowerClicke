const image = document.querySelector(".leaf");
const conterValue = document.getElementById("counter");
let counter = 0;

/* export function conterValue() {
  return document.getElementById("counter");
}
 */
export function incrementCounter(n) {
  setInterval(() => {
    counter = counter + n;
    conterValue.textContent = getCounterValue();
  }, 1000);
}

function increment1Counter(n) {
  counter = counter + n;
  conterValue.textContent = getCounterValue();
}
export function getCounterValue() {
  return counter;
}

export function leafCounter() {
  image.addEventListener("click", () => {
    /* setInterval(() => { */
    increment1Counter(1);
    conterValue.textContent = getCounterValue();
    /* }, 1000); */
  });
}

export function leafZoom() {
  image.addEventListener("click", () => {
    image.classList.add("zoomed");

    setTimeout(() => {
      image.classList.remove("zoomed");
    }, 40);
  });
}
