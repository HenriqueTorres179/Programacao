let maior = -Infinity;
let menor = Infinity;
for (let i = 0; i < 6; i++) {
  let peso = +prompt("Digite o peso do Lote", 0);
  if (peso > maior) {
    maior = peso;
  } else if (peso < menor) {
    menor = peso;
  }
}
console.log(`O maior peso foi de: ${maior}`);
console.log(`O menor peso foi de: ${menor}`);
