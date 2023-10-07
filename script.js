const sliderBtn = document.getElementById('sliderBtn');
const container = document.querySelector(".container-fluid");
const cards = document.getElementsByClassName("card"); 
const iconos = document.getElementsByClassName("fa-brands")
const colorBlanco = document.querySelector(".colorBlanco")
const buscador = document.querySelector("#buscador")

sliderBtn.addEventListener('click', () => {
 sliderBtn.classList.toggle('active');
  container.classList.toggle('darkk-mode');
  colorBlanco.classList.toggle("text-white")

  for (const card of cards) {
    card.classList.toggle('dark-mode');
  }

  for (const icono of iconos) {
    icono.classList.toggle("text-white")
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

buscador.addEventListener("input", ()=>{
    if (buscador.value == ""){
        for (i of cards){
            i.classList.remove("d-none")
        }
    }else{
        filtrados = filtrar(buscador.value, cards)
        for (i of cards){
            i.classList.add("d-none")
        }
        for (i of filtrados){
            i.classList.remove("d-none")
        }
    }
    
})


// ejecuciones
