let numero1 = +prompt("Digite o primeiro número:");
let numero2 = +prompt("Digite um segundo número:");
let operacao = prompt("Digite uma operação matemática: '+', '-', '*' e '/'");
let resultado;
switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    alert("O resultado é: " + resultado.toFixed(2));
    break;
  case "-":
    resultado = numero1 - numero2;
    alert("O resultado é: " + resultado.toFixed(2));
    break;
  case "*":
    resultado = numero1 * numero2;
    alert("O resultado é: " + resultado.toFixed(2));
    break;
  case "/":
    resultado = numero1 / numero2;
    alert("O resultado é: " + resultado.toFixed(2));
    break;
  default:
    alert("Você não uma operação válida!");
}
