let movimentacoes = [100, -30, 50, -20, 80];
let soma = 0;

for (let i = 0; i < movimentacoes.length; i++) {
  soma += movimentacoes[i];
}
console.log(soma.toFixed(2).replaceAll(".", ","));
