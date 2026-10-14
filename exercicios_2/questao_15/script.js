let nota1 = +prompt("Digite a primeira nota do aluno!");
let nota2 = +prompt("Digite a segunda nota do aluno");
let media = (nota1 + nota2) / 2;
let situacao;
if (media >= 7) {
  situacao = "Aprovado!";
} else if (media >= 5 && media <= 6.9) {
  situacao = "Recuperação!";
} else {
  situacao = "Reprovado!";
}
alert("A situação do aluno é: " + situacao);
