let lado1 = +prompt("Digite o primeiro lado.");
while (isNaN(lado1)) {
  lado1 = +prompt("Digite o primeiro lado.");
}
let lado2 = +prompt("Digite o segundo lado.");
while (isNaN(lado2)) {
  lado2 = +prompt("Digite o segundo lado.");
}
let lado3 = +prompt("Digite o seundo lado.");
while (isNaN(lado3)) {
  lado3 = +prompt("Digite o seundo lado.");
}
let tipo;
if (lado1 === lado2 && lado2 === lado3) {
  tipo = "Equilátero";
} else if (
  (lado1 === lado2 && lado2 !== lado3) ||
  (lado1 === lado3 && lado3 !== lado2) ||
  (lado2 === lado3 && lado3 !== lado1)
) {
  tipo = "Isósceles";
} else {
  tipo = "Escaleno";
}
alert("O tipo desse triângulo é: " + tipo);
