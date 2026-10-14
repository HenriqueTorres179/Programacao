let computadores = +prompt("Digite o número de computdores: ");
let consumoMedio = +prompt("Digite o consumo médio (em Mbps): ");
let consumoTotal = consumoMedio * computadores;
let recomendacao;
if (consumoTotal <= 100) {
  recomendacao = "Plano básico!";
} else if (consumoTotal <= 300) {
  recomendacao = "Plano empresarial!";
} else {
  recomendacao = "Plano corporativo!";
}
alert(
  "O consumo total é de: " +
    consumoTotal.toFixed(2) +
    "\n E a recomendação é: " +
    recomendacao,
);
