let numeros = [4, 7, 10, 3, 8, 11, 6];

for (let i = 0; i < numeros.length; i++) {
  if (numeros.sort((a, b) => a - b)[i] % 2 == 0) {
    console.log(" Os números pares são: " + numeros[i]);
  }
}
