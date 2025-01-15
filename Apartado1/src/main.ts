const myArray: string[] = [
  "🐧",
  "🐹",
  "🐨",
  "🦁",
  "🐵",
  "🦊",
  "🐧",
  "🐹",
  "🐨",
  "🦁",
  "🐵",
  "🦊",
];
function shuffleArray(array: any) {
  //bucle para barajar
  for (let i = array.length - 1; i >= 0; i--) {
    //esto genera numero aleatorio
    let j = Math.floor(Math.random() * (i + 1));
    //variable temporal para almacenar los valores ??????
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffleArray(myArray));
console.log(shuffleArray(myArray));
console.log(shuffleArray(myArray));
