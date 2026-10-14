let a;
let b;
let c;
let escolha;
let maior;
let menor;
let meio;
do {
  a = +prompt("Digite um valor inteiro:");
  b = +prompt("Digite um valor inteiro:");
  c = +prompt("Digite um valor inteiro:");
  escolha = prompt(
    "Digite C para crescente e D para decrescente",
  ).toUpperCase();
  if (
    isNaN(a) ||
    !Number.isInteger(a) ||
    a <= 0 ||
    isNaN(b) ||
    !Number.isInteger(b) ||
    b <= 0 ||
    isNaN(c) ||
    !Number.isInteger(c) ||
    c <= 0 ||
    (escolha !== "C" && escolha !== "D")
  ) {
    alert("Digite respostas válidas!");
  }
} while (
  isNaN(a) ||
  !Number.isInteger(a) ||
  a <= 0 ||
  isNaN(b) ||
  !Number.isInteger(b) ||
  b <= 0 ||
  isNaN(c) ||
  !Number.isInteger(c) ||
  c <= 0 ||
  (escolha !== "C" && escolha !== "D")
);
maior = a > b ? a : b;
maior = maior > c ? maior : c;
menor = a < b ? a : b;
menor = menor < c ? menor : c;
meio = a + b + c - maior - menor;
if (escolha === "C") {
  escolha = "Em ordem crescente:" + menor + ", " + meio + ", " + maior + ".";
} else {
  escolha = "Em ordem decrescente:" + maior + ", " + meio + ", " + menor + ".";
}
alert(escolha);