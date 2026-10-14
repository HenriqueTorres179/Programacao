let nota = +prompt("Digite a sua nota!");
while (isNaN(nota)) {
  nota = +prompt("Nota inválida! Digite novamente.");
}
let frequencia = +prompt("Digite a sua frequência!");
while (isNaN(frequencia)) {
  frequencia = +prompt("Frequência inválida! Digite apenas o número!");
}
let aprovacao;
if (nota >= 7 && frequencia >= 75) {
  aprovacao = "Aprovad.";
} else {
  aprovacao = "Reprovado.";
}
alert("O aluno foi: " + aprovacao);
