let cliente = prompt(
  "Digite A para cliente premium. B para cliente ouro e C para cliente diamante",
);
let desconto;
let valor = +prompt("Digite a o valor da compra em reais:");
let valorFinal;
switch (cliente) {
  case "A":
    desconto = valor * 0.05;
    valorFinal = valor - desconto;
    alert("O valor final a ser pago será: R$" + valorFinal);
    break;
  case "B":
    desconto = valor * 0.1;
    valorFinal = valor - desconto;
    alert("O valor final a ser pago será: R$" + valorFinal);
    break;
  case "C":
    desconto = valor * 0.15;
    valorFinal = valor - desconto;
    alert("O valor final a ser pago será: R$" + valorFinal);
    break;
  default:
    alert("Tipo de cliente inválido!");
}
