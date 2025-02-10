export interface Carta {
  // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
  idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
  imagen: string; // por comodidad repetimos la url de la imagen
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  /* Aquí ponemos seis cartas siguiendo la interfaz de InfoCarta */
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
  //perro
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
  //cerdo
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
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  /* Aquí crearemos un array de cartas a partir de un array de infoCartas
       y duplicaremos las cartas para que haya dos de cada tipo.
    */
  //utilizaremos map para crear un nuevo array con los elementos, y flat para que no se anide el nuevo array
  // sintaxis map -> array.map (funcion)
  const coleccionDeCartasNuevo: Carta[] = infoCartas.flatMap((infoCartas) => [
    // a continuacion, llamamos dos veces crearCartaInicial para duplicar la carta
    crearCartaInicial(infoCartas.idFoto, infoCartas.imagen),
    crearCartaInicial(infoCartas.idFoto, infoCartas.imagen),
  ]);
  //llamar a una funcion de barajar cartas, devuelve cartas barajadas mezcladas
  //cons cartasMezcladas = barajarCartas(coleccionDeCartasNuevo)
  // obtenemos un array nuevo ocn cartas duplicadas
  //devolveriamos - return cartasMezcladas;
  return coleccionDeCartasNuevo;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);
//el array creado en la funcion anterior ahora es una variable llamada cartas

/*
    Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
    EstadoPartida = "PartidaNoIniciada", una vez que se pulse Iniciar partida el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
  */
//definimos el estado inicial de la partida
let estadoPartida: EstadoPartida = "PartidaNoIniciada"; //en vez de esto, el interface tablero

//a por el estado cerocartaslevantadas, el inicio de partida
const inicioDePartida = () => {
  tablero.estadoPartida = "CeroCartasLevantadas"; //cambiamos el estado de la partida
  const divs = document.querySelectorAll<HTMLDivElement>(
    ".carta" /*o podemos poner,  la clase "carta" ? -- sí, lod divs seleccionaria TODOS los divs*/
  );
  divs.forEach((div) => {
    // Agregamos el evento click a cada div
    div.addEventListener("click", () => {
      const index = div.dataset.index;
      if (index !== undefined && index) {
        const indiceANumero = parseInt(index, 10);
        clickarCarta(indiceANumero);
      }
    });
  });
};

const cambiarSrcImagen = (id: number) => {
  const img = document.querySelector(`img[data-index="${id}"]`); //cojo la imagen que tiene ese index
  if (img && img instanceof HTMLImageElement) {
    img.src = cartas[id].imagen;
  }
};
//esta funcion va a ui.ts
//ponemos el evento click para manejar el estado de la partida
//añadir lineas de index, ese es el paramtetro
const clickarCarta = (id: number) => {
  //nos tiene que devolver SIEMPRE, 1 solo elemento; por lo tanto, el primer elemento que enecuentre
  /* .find devuelve el primer elemento del array que le indiquemos, en este caso el primer id que encuentra,
y lo renombra como idCartaClickada */
  const idCartaClickada = cartas.find((carta) => carta.idFoto === id);
  // si no hay id O si no esta activa, devolver
  if (!idCartaClickada || !idCartaClickada.estaVuelta) return;
  //
  if (estadoPartida === "CeroCartasLevantadas") {
    //cambiar src
    idCartaClickada.estaVuelta = true; //si hay una carta vuelta entonces
    estadoPartida = "UnaCartaLevantada";
  } else if (estadoPartida === "UnaCartaLevantada") {
    //cambiar src
    // si hay una carta bocaarriba
    idCartaClickada.estaVuelta = true; //y damos vuelta otra carta
    estadoPartida = "DosCartasLevantadas"; // entonces, dos cartas levantadas
  }

  /* darle eventoclick a los divs del apartado 5, y por cada carta vamos a utilizar clickCarta*/
  //hay que comprobar que las dos cartas sea iguales
  //hasta la 134 no son necesarias
  const cartasLevantadas = cartas.filter((carta) => !carta.estaVuelta);
  if (
    cartasLevantadas.length === 2 &&
    cartasLevantadas[0].idFoto === cartasLevantadas[1].idFoto
  ) {
    //si las cartas sin iguales, las hacemos NOinteractivas para que no se puedan volver a tocar
    cartasLevantadas.forEach((carta) => (carta.estaVuelta = false));
    estadoPartida = "CeroCartasLevantadas"; //se pueden volver a clickar cartas
  }
};

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
