let categoria = prompt(
  "Digite R=Residencial, C=Comercial e I=Industrial",
).toUpperCase();
let energia = +prompt("Digite a quantidade de kWh que foram consumidos");
let valor;
switch (categoria) {
  case "R":
    valor = energia * 0.75;
    alert("O valor a ser pago será de: R$" + valor.toFixed(2));
    break;
  case "C":
    valor = energia * 0.92;
    alert("O valor a ser pago será de: R$" + valor.toFixed(2));
    break;
  case "I":
    valor = energia * 0.68;
    alert("O valor a ser pago será de: R$" + valor.toFixed(2));
    break;
  default:
    alert("Categoria de consumo inválida!");
}
