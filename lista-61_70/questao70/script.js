function calcularTotal(vendas) {
  let soma = vendas.reduce(function (acumulador, venda) {
    return acumulador + venda;
  }, 0);
  return soma;
}

function calcularMedia(vendas) {
  let media = calcularTotal(vendas) / vendas.length;
  return media;
}

function encontrarMaior(vendas) {
  let maior = vendas[0];
  vendas.forEach((valor) => {
    if (valor > maior) {
      maior = valor;
    }
  });
  return maior;
}

function contarVendasAcimaDe(vendas, valorRef) {
  return vendas.reduce(function (acumulador, valorAtual) {
    if (valorAtual > valorRef) {
      return acumulador + 1;
    }
    return acumulador;
  }, 0);
}

let vendas = [120, 75, 240, 55, 180, 90, 310, 65];

console.log("Total de vendas: R$", calcularTotal(vendas));
console.log("Média das vendas: R$", calcularMedia(vendas).toFixed(2));
console.log("Maior venda: R$", encontrarMaior(vendas));
console.log("Vendas acima de R$ 100:", contarVendasAcimaDe(vendas, 100));
