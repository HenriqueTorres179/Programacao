let peso = +prompt("Digite o peso do produto em kg!");
let frete;
if (peso <= 5) {
  frete = "R$20,00!";
} else if (peso >= 5 && peso <= 20) {
  frete = "R$50,00";
} else {
  frete = "R$100,00";
}
alert("O frete será: " + frete);
