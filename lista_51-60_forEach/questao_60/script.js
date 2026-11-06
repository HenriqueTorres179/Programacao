let vendas = [120, 75, 240, 55, 180, 90, 310, 65];

let total = 0;
let maior = -Infinity;
let vendasMaiores = 0;

vendas.forEach((venda) => {
  total += venda;
  if (venda > maior) {
    maior = venda;
  }
  if (venda >= 150) {
    vendasMaiores++;
  }
});
let media = total / vendas.length;
console.log(`O total de vendas foi de: ${total}, a média foi de: ${media},
    a maior venda foi de: ${maior} e a quantidade de vendas maiores ou 
    iguais a 150 foi de: ${vendasMaiores}  `);
