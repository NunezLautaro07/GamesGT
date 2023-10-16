const sliderBtn = document.getElementById('sliderBtn');
const container = document.querySelector(".container-fluid");
const cards = document.getElementsByClassName("card"); 
const iconos = document.getElementsByClassName("fa-brands")
const colorBlanco = document.querySelector(".colorBlanco")
const buscador = document.querySelector("#buscador")
const BtnDark = document.getElementsByClassName("btn-darkk")
const col = document.getElementsByClassName("col")
const html = document.querySelector("html");
const archivo = document.querySelector("#archivoo")
const row = document.querySelector(".row1");




sliderBtn.addEventListener("click", () => {
    sliderBtn.classList.toggle('active');
    html.dataset.bsTheme = html.dataset.bsTheme === "dark" ? "light" : "dark";
    for(const boton of BtnDark){
        boton.classList.toggle("btn-outline-dark")
        boton.classList.toggle("btn-outline-light")
    }
    for (const card of cards) {
        card.classList.toggle('dark-mode');
    }
});
iteracion = 0
class Card {
    constructor(archivo,foto,nombre,descripcion,creador = null) {
        this.archivo = archivo
        this.foto = foto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.creador = creador;
        this.divElement = null;
        this.id = iteracion++;
        this.#crear();
    }

    #crear() {
        this.tags = `
    <form action="https://getform.io/f/6e93e0db-28c3-4666-be55-6e398338481c" method="post" enctype="multipart/form-data" name="formulario">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4 g-0 ${this.foto} foto-card">
                    ${this.archivo}
                </div>
                <div class="col-md-8">
                    <div class="card-body text-center">
                        <h5 class="card-title text-center fs-4">${this.nombre}</h5>
                        <p class="card-text fs-5">${this.descripcion}</p>
                        
                        <div class="rating">
                        <input type="radio" name="rating-${this.id}" id="star1-${this.id}" value="1" />
                            <label for="star1-${this.id}"></label>
                            <input type="radio" name="rating-${this.id}" id="star2-${this.id}" value="2" />
                            <label for="star2-${this.id}"></label>
                            <input type="radio" name="rating-${this.id}" id="star3-${this.id}" value="3" />
                            <label for="star3-${this.id}"></label>
                            <input type="radio" name="rating-${this.id}" id="star4-${this.id}" value="4" />
                            <label for="star4-${this.id}"></label>
                            <input type="radio" name="rating-${this.id}" id="star5-${this.id}" value="5" />
                            <label for="star5-${this.id}"></label>

                        </div>
                        <br>
                        <input type="submit" class="btn btn-outline-dark btn-darkk mb-3" value="Enviar">
                        <br>
                        ${this.creador}
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        
    </form>
`;




        this.divElement = document.createElement('div');
        this.divElement.classList.add("col-12")
        this.divElement.classList.add("col-md-12")
        this.divElement.classList.add("col-lg-12")
        this.divElement.classList.add("col-xl-6") 
        this.divElement.innerHTML = this.tags;
        row.appendChild(this.divElement);
    }

    cumpleFiltro(substring) {
        return (
            this.nombre.toLowerCase().includes(substring) ||
            this.descripcion.toLowerCase().includes(substring)
        );
    }
}

const nombres_productos = [
    [`<a href="./juego1/index.html" class="btn boton-centro bordes fs-1"><i class="fa-regular fa-circle-play" style="color: #ffffff;"></i></i></a>`,"foto-card1", "Racing GT", "¡Acelera y esquiva todos los autos que puedas hasta llegar a la meta!",`<div class=" text-muted mb-0">
    Martina Urdangaray
  </div>`],
    [`<a href="./juego2/index.html" class="btn boton-centro bordes fs-1"><i class="fa-regular fa-circle-play" style="color: #ffffff;"></i></i></a>`,"foto-card2", "Tetris HP", "Haz caer las piezas y rellena los huecos para hacerlas desaparecer... ¡Ten cuidado de no quedarte sin espacio!",`<div class=" text-muted mb-0">
    Martina Urdangaray
  </div>`],
    [`<a href="./juego3/index.html" class="btn boton-centro bordes fs-1"><i class="fa-regular fa-circle-play" style="color: #ffffff;"></i></i></a>`,"foto-card3", "Viborita", " Controla a una serpiente hambrienta, crece recogiendo manzanas, esquiva paredes y tu propio cuerpo. ¿Hasta dónde llegarás sin perder? ¡Sé el maestro de la viborita",`<div class=" text-muted mb-0">
    Francisco Zubaran
  </div>`],
//     [`<a href="./juego4/index.html" class="btn boton-centro bordes fs-1"><i class="fa-regular fa-circle-play" style="color: #ffffff;"></i></i></a>`,"foto-card4", "Titulo del juego", "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",`<div class=" text-muted mb-0">
//     Francisco Zubaran
//   </div>`],
    [`<a href="./juego5/index.html" class="btn boton-centro bordes fs-1"><i class="fa-regular fa-circle-play" style="color: #ffffff;"></i></i></a>`,"foto-card5", "Ta-Te-Ti", "Forma una línea de tres símbolos iguales (X u O) en un tablero 3x3.",`<div class=" text-muted mb-0">
    Marco Becerro
  </div>`],
    [`<a href="./juego6/index.html" class="btn boton-centro bordes fs-1"><i class="fa-regular fa-circle-play" style="color: #ffffff;"></i></i></a>`,"foto-card6", "Tetris GT", "¡Avalancha de diversión en Tetris! Encaja bloques que caen, completa filas sin espacios. ¡Demuestra tu destreza mental y sé el maestro del Tetris!",`<div class=" text-muted mb-0">
    Francisco Zubaran
  </div>`],
  [`<a href="./juego7/index.html" class="btn boton-centro bordes fs-1"><i class="fa-regular fa-circle-play" style="color: #ffffff;"></i></i></a>`,"foto-card7", "Adivina adivinador", "Adivina el Numero en el que estoy pensando en los menos intentos posibles!",`<div class=" text-muted mb-0">
  GianFranco Caporaletti
</div>`],
  [`<label for="archivoo" class="btn boton-centro bordes  fs-1 ">
  <i class="fa-regular fa-circle-play" style="color: #ffffff;"></i>
</label>
<input class="d-none "name="Archivo" id="archivoo" type="file"  multiple  >`,"foto-card88",`<input type="text" class="transp colorInput" name="Nombre" placeholder="Envia tu juego"></h5>`,`<input type="text" class="transp colorInput" name="Descripcion" placeholder="Descripcion de tu juego">`, "  "],

];

let busqueda = buscador.value;

function filtrar(substring, elements) {
    let cumplen = [];

    for (let i of elements) {
        if (i.innerText.toLowerCase().includes(substring.toLowerCase())) {
            cumplen.push(i);
        }
    }

    return cumplen;
}

let order = 1;

buscador.addEventListener("input", () => {
    const substring = buscador.value.toLowerCase();

    if (substring === "") {
        for (const producto of productos) {
            producto.divElement.classList.remove("d-none");
        }
    } else {
        for (const producto of productos) {
            const cardElement = producto.divElement;
            if (producto.cumpleFiltro(substring)) {
                cardElement.classList.remove("d-none");
                cardElement.classList.add(`order-${order}`);
                order++;
            } else {
                cardElement.classList.add("d-none");
            }
        }
    }
});

const productos = [];

for (const p of nombres_productos) {
    const n_prod = new Card(p[0], p[1], p[2], p[3], p[4]);
    productos.push(n_prod);
}
