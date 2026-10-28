let nomes = ["Matheus", "Kauã", "Henrique", "Lukas"];
console.log("Tamanho do array = ", nomes.length);
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

let num = [2, 5, 3, 7, 10];
for (let i = 0; i < num; i++) {
  console.log(num[i]);
}

let valores = [3, 5, 7, 9];
let soma = 0;
for (let i = 0; i < valores.length; i++) {
  soma += valores[i];
}
console.log(soma);

let numeros = [6, 8, 10, 4];
let somar = 0;
for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}
let media = somar / numeros.length;
console.log(media.toFixed(2).replaceAll(".", ","));
