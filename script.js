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


