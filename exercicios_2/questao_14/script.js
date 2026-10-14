let consumo = +prompt("Digite o consumo de água em m³!");
let valor;
if (consumo <= 10) {
  valor = "30 reais";
} else if (consumo >= 10 && consumo <= 25) {
  valor = "50 reais";
} else {
  valor = "25 reais";
}
alert("O valor da conta de água será: " + valor);
