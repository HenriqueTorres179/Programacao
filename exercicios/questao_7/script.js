let valorInicial = parseInt(prompt("Digite o valor inicil do relógio!(KWh"));
let valorFinal = parseInt(prompt("Digite o valor final!(KWh"));
let kwh = valorFinalinal - valorInicialnicial;
let valorKwh = parseFloat(
  prompt("Digite o valor em reais por KWh até 150KWh!"),
);
let fatura;
if (kwh <= 150) {
  fatura = valorKwh * kwh;
} else kwh >= 150;
{
  extra = kwh - 150;
  fatura = 150 * valorKwh + extra * kwh * 1.2;
}
