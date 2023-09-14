const image = document.querySelector(".leaf");
let counter = 0


export function getCounterValue() {
  return parseInt(counter);
}
export function conterValue() {
  return document.getElementById("counter");
}

export function incrementCounter(n,coun) {
  counter=coun;
  setInterval(() => {
    counter = counter + n;
    conterValue().textContent = parseInt(counter);
    /* seedsAmount() */
  }, 1000);
}


/* function seedsAmount(){
  let seeds =conterValue().textContent
  localStorage.setItem('seedsAmount', seeds); */
/*   var datoRecuperado = localStorage.getItem("seedsAmount");
  console.log(datoRecuperado) */
/* }
const valorAlmacenado = localStorage.getItem('seedsAmount');

conterValue().textContent = parseInt(valorAlmacenado); */


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
    image.style.transform = 'scale(1.0) translateY(-50px)';
    setTimeout(() => {
        imagenClickable.style.display = "none";
    }, 100); 
  });
}





