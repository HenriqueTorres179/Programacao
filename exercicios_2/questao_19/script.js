let valorBruto = +prompt("Digite o valor bruto do carrinho em reais: ");
let nivelFidelidade = prompt(
  "Seu nível de fidelidade é 'Ouro', 'Prata' ou 'Bronze'",
).toLocaleLowerCase();
let cupom = prompt("O cupom é válido? sim ou não").toLocaleLowerCase();
let desconto;
let frete;
let valorFinal;
if (nivelFidelidade === "ouro") {
  desconto = valorBruto * 0.15;
  if (valorBruto - desconto >= 150) {
    frete = 0;
  } else {
    frete = 10;
  }
  valorFinal = valorBruto - desconto + frete;
} else if (nivelFidelidade === "prata") {
  if (cupom === "sim") {
    desconto = valorBruto * 0.1;
  } else {
    desconto = valorBruto * 0.05;
  }
  if (valorBruto > 250) {
    frete = 0;
  } else {
    frete = 20;
  }
  valorFinal = valorBruto - desconto + frete;
} else if (nivelFidelidade === "bronze") {
  if (cupom === "sim") {
    desconto = valorBruto * 0.05;
  } else {
    desconto = 0;
  }
  frete = 30;
  valorFinal = valorBruto - desconto + frete;
} else {
  alert("Por favor, digite respostas válidas!");
}
alert(
  "O valor do desconto a ser aplicado em reais é: " +
    desconto.toFixed(2) +
    "\n O valor do frete em reais será: " +
    frete.toFixed(2) +
    "\n O valor final a ser pago em reais será: " +
    valorFinal.toFixed(2),
);
