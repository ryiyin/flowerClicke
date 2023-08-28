const image = document.querySelector(".leaf");
let counter = 0;

export function conterValue() {
  return document.getElementById("counter");
}
export function incrementCounter(n) {
  counter = counter + n;
}

export function getCounterValue() {
  return counter;
}

export function leafCounter() {
  image.addEventListener("click", () => {
    /* setInterval(() => { */
      incrementCounter(1);
      conterValue().textContent = getCounterValue();
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
