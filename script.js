const sliderBtn = document.getElementById('sliderBtn');
const container = document.querySelector(".container-fluid");
const cards = document.getElementsByClassName("card"); 
const iconos = document.getElementsByClassName("fa-brands")
const colorBlanco = document.querySelector(".colorBlanco")

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













// function agregarOpinion() {
//   const name = document.getElementById('name').value;
//   const opinion = document.getElementById('opinion').value;

//   if (name.trim() === '' || opinion.trim() === '') {
//     alert('Por favor, completa todos los campos.');
//     return;
//   }

//   const opinionObj = {
//     name,
//     opinion,
//     date: new Date().toLocaleString()
//   };

//   const opinions = JSON.parse(localStorage.getItem('opinions') || '[]');
//   opinions.push(opinionObj);
//   localStorage.setItem('opinions', JSON.stringify(opinions));

//   mostrarOpiniones();
// }

// function mostrarOpiniones() {
//   const opinions = JSON.parse(localStorage.getItem('opinions') || '[]');
//   const opinionList = document.getElementById('opinionList');
//   opinionList.innerHTML = '';
//   opinions.forEach(opinionObj => {
//     const opinionDiv = document.createElement('div');
//     opinionDiv.classList.add('opinion');
//     const namePara = document.createElement('p');
//     namePara.textContent = `Nombre: ${opinionObj.name}`;
//     const opinionPara = document.createElement('p');
//     opinionPara.textContent = `Opinión: ${opinionObj.opinion}`;
//     const datePara = document.createElement('p');
//     datePara.textContent = `Fecha: ${opinionObj.date}`;

//     opinionDiv.appendChild(namePara);
//     opinionDiv.appendChild(opinionPara);
//     opinionDiv.appendChild(datePara);
//     opinionList.appendChild(opinionDiv);
//   });
// }

// mostrarOpiniones();


