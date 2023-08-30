const image = document.querySelector(".leaf");
/* const conterValue = document.getElementById("counter"); */
let counter = 0;
export function getCounterValue() {
  return parseInt(counter);
}
export function conterValue() {
  return document.getElementById("counter");
}

export function incrementCounter(n,coun) {
  counter=coun
  setInterval(() => {
    counter = counter + n;
/*     console.log(counter,n) */
    conterValue().textContent = parseInt(counter);
    
  }, 1000);
}

function increment1Counter(n) {
  counter = counter + n;
  conterValue().textContent = getCounterValue();
}

export function leafCounter() {
  image.addEventListener("click", () => {
    increment1Counter(1);
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
