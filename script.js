const sliderBtn = document.getElementById('sliderBtn');
const container = document.querySelector(".container-fluid");
const cards = document.getElementsByClassName("card"); 
const iconos = document.getElementsByClassName("fa-brands")
const colorBlanco = document.querySelector(".colorBlanco")
const buscador = document.querySelector("#buscador")
const BtnDark = document.getElementsByClassName("btn-darkk")
const col = document.getElementsByClassName("col")
const html = document.querySelector("html");

sliderBtn.addEventListener("click", () => {
    sliderBtn.classList.toggle('active');
    html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark";
    for(const boton of BtnDark){
        boton.classList.toggle("btn-outline-dark")
    boton.classList.toggle("btn-outline-light")
    for (const card of cards) {
        card.classList.toggle('dark-mode');
      }
    }
  });




//funciones
function filtrar(substring, elements){
    cumplen = []
    for (i of elements){
        if (i.innerText.toLowerCase().includes(substring.toLowerCase())){
            cumplen.push(i)
        }
    }
    return cumplen
}
//eventos
let order = 1;

buscador.addEventListener("input", () => {
    if (buscador.value == "") {
        for (const i of col) {
            i.classList.remove("d-none");
        }
    } else {
        const filtrados = filtrar(buscador.value, col);
        for (const i of col) {
            i.classList.add("d-none");
        }
        for (const i of filtrados) {
            i.classList.remove("d-none");
            i.classList.add(`order-${order}`);
            order++;

            }
        }
    }
);