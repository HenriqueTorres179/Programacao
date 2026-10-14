//Entrada de Dados

let area = +prompt("Digite a área total a ser pintada : (m²)");
let rendimento = +prompt(
  "Digite a área total que pode ser pintada por litro: (m²)",
);
let volume = +prompt("Digite quantos litros possui uma lata de tinta: ");
let preco = +prompt("Digite o preço de cada lata de tinta: ");
let horasEstimadas = +prompt(
  "Digite a quantidade de horas (e apenas horas) para a realização do serviço:",
);
let quantidadePintores = parseInt(
  prompt("Digite a quantidade de pintores que serão alocados para o serviço: "),
);
let precoHora = +prompt("Digite o preço (em R$) por hora de cada pintor: ");
let valorReservado = +prompt("Digite o orçamento disponível da família: ");
let saldoFinal;
let desconto = 0.95;
let formaPagamento;
let parcela;
let valorComDesconto;

//Processamento de Dados

let litroTotal = area / rendimento;
let quantidadeLatas = Math.ceil(litroTotal / volume);
let custoTotalLatas = quantidadeLatas * preco;
let totalPorPintor = precoHora * horasEstimadas;
let precoPintores = totalPorPintor * quantidadePintores;
let custoFinal = precoPintores + custoTotalLatas;

if (valorReservado >= custoFinal) {
  formaPagamento = "À vista, com desconto de 5%";
  valorComDesconto = custoFinal * desconto;
  saldoFinal = valorReservado - valorComDesconto;

  saldoFinal = saldoFinal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  valorComDesconto = valorComDesconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
} else if (valorReservado < custoFinal) {
  if (custoFinal / 2 >= valorReservado) {
    formaPagamento = "Parcelado em 4 vezes sem juros.";
    parcela = custoFinal / 4;
    parcela = parcela.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else if (
    custoFinal / 2 > valorReservado &&
    valorReservado * 1.3 == custoFinal
  ) {
    formaPagamento = "Parcelado em 3 vezes sem juros.";
    parcela = custoFinal / 3;
    parcela = parcela.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    formaPagamento = "Parcelado em 2 vezes sem juros";
    parcela = custoFinal / 2;
    parcela = parcela.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

custoTotalLatas = custoTotalLatas.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
precoPintores = precoPintores.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
custoFinal = custoFinal.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

//Saída de Dados

if (parcela === undefined) {
  alert(
    "A quantidade de latas de tinta será: " +
      quantidadeLatas +
      ".\n" +
      "O preço total a ser pago por todas as latas de tinta será de: " +
      custoTotalLatas +
      ".\n" +
      "O custo total da mão de obra será de: " +
      precoPintores +
      ".\n" +
      "O custo total bruto da obra será de: " +
      custoFinal +
      ".\n" +
      "A forma de pagamento recomendada é: " +
      formaPagamento +
      ".\n" +
      "O valor final com desconto à vista será de: " +
      valorComDesconto +
      ".\n" +
      "O saldo restante do seu orçamento é de: " +
      saldoFinal,
  );
} else {
  alert(
    "A quantidade de latas de tinta será: " +
      quantidadeLatas +
      ".\n" +
      "O preço total a ser pago por todas as latas de tinta será de: " +
      custoTotalLatas +
      ".\n" +
      "O custo total da mão de obra será de: " +
      precoPintores +
      ".\n" +
      "O custo total bruto da obra será de: " +
      custoFinal +
      ".\n" +
      "A forma de pagamento recomendada é: " +
      formaPagamento +
      ".\n" +
      "O valor de cada parcela será de: " +
      parcela,
  );
}
