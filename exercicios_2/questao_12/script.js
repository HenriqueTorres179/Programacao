let lado1 = +prompt("Qual a medida do primeiro lado?");
let lado2 = +prompt("Qual a medida do segundo lado?");
let lado3 = +prompt("Digite a medida do terceiro lado?");
let triangulo;
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado1 && lado2 + lado3 > lado1) {
  triangulo = "É um triângulo!";
} else {
  triangulo = "Não é um triângulo";
}
alert(triangulo);
