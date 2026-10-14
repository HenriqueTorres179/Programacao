// 1. Entrada de dados
let media = +prompt("Digite a média final do aluno: ");
let rendaFamiliar = +prompt(
  "Digite a renda familiar mensal (em R$) do aluno: ",
);

let bolsa;
let situacao;

// 2. Processamento de Dados
if (media >= 9 && rendaFamiliar <= 2000) {
  bolsa = "100%";
  situacao = "O candidato recebeu bolsa total";
} else if (media >= 8 && rendaFamiliar <= 3500) {
  bolsa = "50%";
  situacao = "O candidato recebeu bolsa parcial";
} else if (media >= 7 && rendaFamiliar <= 5000) {
  bolsa = "25%";
  situacao = "O candidato recebeu bolsa parcial";
} else {
  bolsa = "0%";
  situacao = "O candidato não recebeu bolsa";
}

// 3. Saída de dados
alert(`${situacao}, com um total de ${bolsa} de bolsa!`);
