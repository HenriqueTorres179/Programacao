let nota1 = +prompt("Qual a primeira nota?");
let nota2 = +prompt("Qual a segunda nota?");
let media = (nota1 + nota2) / 2;
let aprovacao;
if (media >= 7) {
  aprovacao = "Aprovado!";
} else {
  aprovacao = "Reprovado!";
}
alert("O aluno foi: " + aprovacao);
