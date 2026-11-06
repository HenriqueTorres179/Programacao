let movimentacoes = [250, -80, -35, 120, -60, 90];

let positivos = movimentacoes.filter((movimentacao) => {
  if (movimentacao > 0) {
    return movimentacao;
  }
});
let negativos = movimentacoes.filter((movimentacao) => {
  if (movimentacao < 0) {
    return movimentacao;
  }
});
console.log(
  `AS movimentações positivas foram: ${positivos.join(", ")}, e foram um total de: ${positivos.length}.
  As movimentações negativas foram: ${negativos.join(", ")}, e foram um total de: ${negativos.length}.`,
);
