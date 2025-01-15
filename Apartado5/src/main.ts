interface InfoCarta {
  idFoto: number;
  imagen: string;
}
const imagenesCartas: InfoCarta[] = [
  //las cartas con el mismo src tienen la misma id
  //leon
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
  },
  //buho
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
  },
  //perro
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
  },
  //pollo
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
  },
  //cerdo
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
  },
  //abeja
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos todos los divs
  const divs = document.querySelectorAll<HTMLDivElement>(
    "div" /*o podemos poner,  la clase "carta" ?*/
  );
  divs.forEach((div) => {
    // Agregamos el evento click a cada div
    div.addEventListener("click", () => {
      // Obtenemos la imagen dentro del div
      //querysleector devuelve el primer elemento de los seleccionados
      const img = div.querySelector<HTMLImageElement>("img");
      if (img && img instanceof HTMLImageElement) {
        // Cambiamos el src de la imagen
        //data-index es soslo para imagenes?
        /*img.dataset accede a todo los data_*, en este caso los index, por eso img.dataset.index.
        como es un string, as string. el 10 significa base decimal 10, lo convierte en numero entero*/
        const index = img.dataset.index;
        if (index && index !== undefined) {
          //convertimos el indice, de string a numero con base decimal 10(numero entero)
          const indiceANumero = parseInt(index, 10);

          if (
            !isNaN(indiceANumero) &&
            indiceANumero >= 0 &&
            indiceANumero < imagenesCartas.length
          ) {
            img.src = imagenesCartas[indiceANumero].imagen;
          }
        }
      }
    });
  });
});

