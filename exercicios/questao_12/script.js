let preco = +prompt("Qual é o preço do produto (em R$)?");
let origem = parseInt(prompt("Qual é o código de origem?"));
let procedencia;
if (origem == 1) {
  procedencia = "Sul";
} else if (origem == 2) {
  procedencia = "Sudeste";
} else if (origem == 3) {
  procedencia = "Centro-Oeste";
} else if (origem == 4) {
  procedencia = "Norte";
} else if (origem == 5) {
  procedencia = "Nordeste";
} else {
  alert("Digite um código de origem válido, entre 1 a 5!");
}
alert("O preço do produto é: R$" + preco.toFixed(2));
  alert("A procedência é: " + procedencia);
