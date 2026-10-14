let horas = +prompt("Digite o total de horas utilizadas: ");
let valorHora = +prompt("Digite o valor por hora!");
let valorBruto = horas * valorHora;
let valorFinal;
let desconto;
if (horas <= 100) {
  desconto = 0;
  valorFinal = valorBruto;
} else if (horas <= 250) {
  desconto = valorBruto * 0.08;
  valorFinal = valorBruto - desconto;
} else {
  desconto = valorBruto * 0.15;
  valorFinal = valorBruto - desconto;
}
alert(
  "O valor bruto será (em R$): " +
    valorBruto.toFixed(2) +
    "\n O desconto será de (em R$): " +
    desconto.toFixed(2) +
    "\n O valor final a ser pago será de (em R$): " +
    valorFinal.toFixed(2),
);
