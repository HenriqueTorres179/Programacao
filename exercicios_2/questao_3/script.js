let numero1 = +prompt("Digite um número");
while (isNaN(numero1)) {
  numero1 = +prompt("Digite um número válido!");
}
let numero2 = +prompt("Digite um segundo número");
while (isNaN(numero2)) {
  numero2 = +prompt("Digite um segundo número válido!");
}
let operacao = prompt("Digite uma operação matemática (+, -, *, /)");

while (
  operacao !== "+" &&
  operacao !== "-" &&
  operacao !== "*" &&
  operacao !== "/"
) {
  operacao = prompt(
    "Digite upenas uma operação matemática, entre '+', '-', '*', '/'!",
  );
}
let resultado;
if (operacao === "+") {
  resultado = numero1 + numero2;
} else if (operacao === "-") {
  resultado = numero1 - numero2;
} else if (operacao === "*") {
  resultado = numero1 * numero2;
} else {
  resultado = numero1 / numero2;
}
alert("O resultado dessa operação é de: " + resultado.toFixed(3));
