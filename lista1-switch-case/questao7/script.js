let figura = +prompt(
  "Digite a figura geométrica: 1-'quadrado', 2-'retangulo' ou 3-'circulo'",
);
let area;
let lado;
let base;
let altura;
let raio;

switch (figura) {
  case 1:
    lado = +prompt("Digite o valor do lado:");
    area = lado * lado;
    alert("A área é: " + area.toFixed(2));
    break;
  case 2:
    base = +prompt("Digite o valor da base:");
    altura = +prompt("Digite o valor da altura");
    area = base * altura;
    alert("A área é: " + area.toFixed(2));
    break;
  case 3:
    raio = +prompt("Digite o valor do raio:");
    area = Math.PI * raio ** 2;
    alert("A área é: " + area.toFixed(2));
    break;
  default:
    alert("Informe um número de figura válido!");
}
