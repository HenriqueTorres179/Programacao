function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}
let nota1 = +prompt(`1 nota`);
let nota2 = +prompt(`2 nota`);
let media = calcularMedia(7, 9);
console.log(`A média é ${media.toFixed(2).replace(".", ",")}`);
