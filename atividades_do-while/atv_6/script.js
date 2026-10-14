let salario;
let financiamento;
let resposta;

do {
  salario = +prompt("Digite o salário: (em R$)");
  financiamento = +prompt("Digite o valor do financiamento desejado: (em R$)");

  if (
    isNaN(salario) ||
    isNaN(financiamento) ||
    salario < 0 ||
    salario > 20000 ||
    financiamento < 0 ||
    financiamento > 1000000
  ) {
    alert("Digite valores válidos!");
  }
} while (
  isNaN(salario) ||
  isNaN(financiamento) ||
  salario < 0 ||
  salario > 20000 ||
  financiamento < 0 ||
  financiamento > 1000000
);

if (financiamento <= salario * 5) {
  resposta = "Financiamento Concedido! ";
} else {
  resposta = "Financiamento Negado! ";
}

alert(resposta + "Obrigado por nos consultar.");
