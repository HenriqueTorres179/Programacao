/*let temperaturas = [18, 22, 16, 25, 19, 27, 21];

let maior = Math.max(...temperaturas);
let menor = Math.min(...temperaturas);

console.log(`O maior é: ${maior}.
    Já o menor é: ${menor}`);
*/

let temperaturas = [18, 22, 16, 25, 19, 27, 21];
let maior = -Infinity;
let menor = Infinity;

temperaturas.forEach((temperatura) => {
  if (temperatura > maior) {
    maior = temperatura;
  } else if (temperatura < menor) {
    menor = temperatura;
  }
});
console.log(`O maior é: ${maior}.
    Já o menor é: ${menor}`);
