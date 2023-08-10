const stars = document.querySelectorAll('input[name="rating"]');

stars.forEach(star => star.addEventListener('change', handleRating));

function handleRating(event) {
  const rating = event.target.value;
  // Aquí puedes hacer lo que desees con la puntuación seleccionada, como enviarla al servidor o mostrarla en pantalla.
  console.log(`Puntuación seleccionada: ${rating} estrellas`);
}
const stars2 = document.querySelectorAll('input[name="rating-2"]');

stars2.forEach(star2 => star2.addEventListener('change', handleRating));

function handleRating(event) {
  const rating2 = event.target.value;
  // Aquí puedes hacer lo que desees con la puntuación seleccionada, como enviarla al servidor o mostrarla en pantalla.
  console.log(`Puntuación seleccionada: ${rating2} estrellas`);
}

const sliderBtn = document.getElementById('sliderBtn');
const body = document.body
const card = document.getElementsByClassName('card')
sliderBtn.addEventListener('click', () => {
  sliderBtn.classList.toggle('active');
  body.classList.toggle('dark-mode');
  card.classList.toggle('dark-mode');
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


