let horasPrevistas = +prompt(
  "Digite o número de horas previstas para o projeto: ",
);
let valorHora = +prompt("Digite o preço (em R$) de cada hora: ");
let percentualComplexidade = +prompt(
  "Digite o percentual ('10', '20' ou '30') de complexidade: ",
);
let percentual = percentualComplexidade / 100;
let custoBase = horasPrevistas * valorHora;
let acrescimo = custoBase * percentual;
let valorFinal = custoBase + acrescimo;
let classificacao;
if (valorFinal <= 8000) {
  classificacao = "Projeto Pequeno!";
} else if (valorFinal <= 20000) {
  classificacao = "Projeto Médio";
} else {
  classificacao = "Projeto Grande";
}
alert(`O custo base será de: R$ ${custoBase.toFixed(2)}
O acréscimo será de: R$ ${acrescimo.toFixed(2)}
O custo final será de: R$ ${valorFinal.toFixed(2)}
O projeto é classificado como: ${classificacao}`);
