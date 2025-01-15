import "./style.css";
const imagenesSrc: string[] = [
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
];
document.addEventListener("DOMContentLoaded", () => {
  const cartas = document.getElementsByClassName("carta");
  console.log(cartas);
  for (let i = 0; i < cartas.length; i++) {
    const carta = cartas[i];
    if (carta && carta instanceof HTMLDivElement) {
      console.log(cartas[i]);
      carta.addEventListener("click", () => {
        manejarFlipCarta(carta, i);
        console.log("click");
      });
    }
  }
});
const manejarFlipCarta = (carta: HTMLDivElement, i: number) => {
  carta.classList.toggle("flip");
  cambiaSrc(carta, i);
};
const cambiaSrc = (carta: HTMLDivElement, i: number) => {
  const imagenes = document.getElementsByClassName("imagenCarta");
  const imagen = imagenes[i];
  if (imagen && imagen instanceof HTMLImageElement) {
    imagen.src = carta.classList.contains("flip") ? imagenesSrc[i] : "";
  }
};
