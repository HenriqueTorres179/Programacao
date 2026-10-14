let numero1;
let numero2;
let sinal;
let operacao;
do {
  numero1 = +prompt("Digite o primeiro número inteiro:");
  numero2 = +prompt("Digite o segundo número inteiro:");
  sinal = prompt("Digite o sinal da operação desejada: (+, -, *, /).");
  if (
    (sinal !== "*" && sinal !== "/" && sinal !== "-" && sinal !== "+") ||
    isNaN(numero1) ||
    isNaN(numero2)
  ) {
    alert("Erro! Digite números válidos e uma operação válida (+, -, *, /).");
  }
} while (
  isNaN(numero1) ||
  isNaN(numero2) ||
  (sinal !== "*" && sinal !== "/" && sinal !== "-" && sinal !== "+")
);
switch (sinal) {
  case "+":
    operacao = numero1 + numero2;
    break;
  case "-":
    operacao = numero1 - numero2;
    break;
  case "*":
    operacao = numero1 * numero2;
    break;
  case "/": {
    let maior = numero1 > numero2 ? numero1 : numero2;
    let menor = numero1 > numero2 ? numero2 : numero1;
    if (menor === 0) {
      alert("Erro! Impossível dividir por zero.");
      operacao = 0;
    } else {
      operacao = maior / menor;
    }
    break;
  }
}
alert("O valor final da operação será de: " + operacao.toFixed(2));
