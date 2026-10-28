let temperaturas = [12, 18, 15, 20, 11, 17, 14];
let maior = -Infinity;
let menor = Infinity;
for (let i = 0; i < temperaturas.length; i++) {
  temperaturas[i] > maior;
  /*  ? (maior = temperaturas[i])
    : temperaturas[i] < menor
      ? (menor = temperaturas[i])
      : menor;
  */
  if (temperaturas[i] > maior) {
    maior = temperaturas[i];
  } else if (temperaturas[i] < menor) {
    menor = temperaturas[i];
  }
}
console.log("O menor número é: " + menor + " \n O maior número é: " + maior);
