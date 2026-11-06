let numeros = [12, 7, 4, 9, 16, 3, 20, 11, 8];
let pares = [];
let impares = [];
numeros.forEach((numero) => {
  if (numero % 2 === 0) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
});
pares.sort((a, b) => {
  return a - b;
});
impares.sort((a, b) => {
  return a - b;
});
console.log(`Os números pares são: ${pares.join(", ")}, e temos um total de: ${pares.length} números pares.
  Já os ímpares são: ${impares.join(", ")}, e temos um total de: ${impares.length} números ímpares`);

//pares = numeros.filter((numero) => {
//  return numero % 2 === 0;
//});
