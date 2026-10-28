let numeros = [3, 12, 7, 20, 5, 18, 9, 6];
let contMaior = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 10) {
    contMaior++;
  }
}
console.log("O número de valores maiores ou iguais a 10, são de: " + contMaior);
