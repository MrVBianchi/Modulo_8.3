/*
¡¡¡¡¡¡¡¡¡¡ESTE ES EL CODIGO PRINCIPAL !!!!!!!!
const carta = document.getElementById('carta');

if (carta && carta instanceof HTMLDivElement) {
  carta.addEventListener('click', () => {
    carta.classList.toggle('flip');

    const imagen = document.getElementById('imagen');

    if (imagen && imagen instanceof HTMLImageElement) {
      imagen.src = carta.classList.contains('flip')
        ? 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png'
        : 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png';
    }
  });
}*/
document.addEventListener("DOMContentLoaded", () => {
  const carta = document.getElementById("carta");
  if (carta && carta instanceof HTMLDivElement) {
    carta.addEventListener("click", () => manejarFlipCarta(carta));
  }
});
const manejarFlipCarta = (carta: HTMLDivElement) => {
  carta.classList.toggle("flip");
  cambiaSrc(carta);
};
const cambiaSrc = (carta: HTMLDivElement) => {
  const imagen = document.getElementById("imagen");
  if (imagen && imagen instanceof HTMLImageElement) {
    imagen.src = carta.classList.contains("flip")
      ? "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"
      : "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png";
  }
};
/*//llamamos el contenedor
const contenedorCartas = document.getElementById("contenedorCartas");

if(contenedorCartas) {
    //creamos un div
    const divParaCarta = document.createElement ("div");
    divParaCarta.className = "div-imagen";

    //creamos imagen
    const imagenCarta = document.createElement("img");
    imagenCarta.src = ""; //enlace imagen
    imagenCarta.alt= "Carta Apartado 2";

    //metemos la imagen en el div
    divParaCarta.appendChild(imagenCarta);
    //añadir el divCarta al contenedor
    contenedorCartas.appendChild(divParaCarta);
};
*/
/*
//Mostrar imagen y volver la carta, en esa creamos el div carta desde JS, pero en el resto de pasos ya no
const crearCarta = (srcImagenBack: string, srcImagenFront: string) => {
    //crear div para la carta
    const carta = document.createElement("div");
    carta.className = "carta";
    //crear imagen para el div
    const imagen = document.createElement("img");
    imagen.src = srcImagenBack;
    imagen.alt = "Carta";
    //añadimos la imagen al div carta
    carta.appendChild(imagen);
  
    //apartado 2-2, addEventlistener
    carta.addEventListener("click", () => {
      carta.classList.toggle("flip");
      imagen.src = carta.classList.contains("flip")
        ? srcImagenFront
        : srcImagenBack;
    });
  
    return carta;
  };
  */
