let ipi;
const produto1 = { codigo: "", valor: 0, qnt: 0 };
const produto2 = { codigo: "", valor: 0, qnt: 0 };
let valido;
const subtotal = { subtotal1: 0, subtotal2: 0, total: 0 };

do {
  //Leitura do IPI
  ipi = +prompt("Digite a porcentagem do IPI (entre 0 e 100):");

  //Leitura do Produto 1
  produto1.codigo = prompt("Digite o código do primeiro produto:");
  produto1.valor = +prompt(
    "Digite o valor unitário (R$ 1 a 50) do primeiro produto:",
  );
  produto1.qnt = +prompt(
    "Digite a quantidade desejada (1 a 500) do primeiro produto:",
  );

  // Leitura do Produto 2
  produto2.codigo = prompt("Digite o código do segundo produto:");
  produto2.valor = +prompt(
    "Digite o valor unitário (R$ 1 a 50) do segundo produto:",
  );
  produto2.qnt = +prompt(
    "Digite a quantidade desejada (1 a 500) do segundo produto:",
  );

  valido =
    !isNaN(ipi) &&
    ipi >= 0 &&
    ipi <= 100 &&
    !isNaN(produto1.valor) &&
    produto1.valor >= 1 &&
    produto1.valor <= 50 &&
    !isNaN(produto2.valor) &&
    produto2.valor >= 1 &&
    produto2.valor <= 50 &&
    !isNaN(produto1.qnt) &&
    produto1.qnt >= 1 &&
    produto1.qnt <= 500 &&
    !isNaN(produto2.qnt) &&
    produto2.qnt >= 1 &&
    produto2.qnt <= 500;

  if (!valido) {
    alert(
      "Entrada inválida! Verifique se:\n" +
        "- IPI está entre 0% e 100%\n" +
        "- Valores unitários estão entre R$ 1,00 e R$ 50,00\n" +
        "- Quantidades estão entre 1 e 500",
    );
  }
} while (!valido);

// 5. Cálculos
subtotal.subtotal1 = produto1.valor * produto1.qnt;
subtotal.subtotal2 = produto2.valor * produto2.qnt;

const somaSubtotais = subtotal.subtotal1 + subtotal.subtotal2;
subtotal.total = somaSubtotais * (1 + ipi / 100);

// 6. Exibição dos resultados
alert(
  `Resumo da Compra:\n` +
    `Produto 1 (${produto1.codigo}): R$ ${subtotal.subtotal1.toFixed(2)}\n` +
    `Produto 2 (${produto2.codigo}): R$ ${subtotal.subtotal2.toFixed(2)}\n` +
    `IPI aplicado: ${ipi}%\n` +
    `Total a pagar: R$ ${subtotal.total.toFixed(2)}`,
);
