function gerarRelatorioNotas(notas) {
  let notasTotais = notas.reduce(function (acumulador, valorAtual) {
    return (acumulador += valorAtual);
  }, 0);
  return notasTotais / notas.length;
}
function verificarAprovacao(media) {
  let situacao = {
    Aprovado: media >= 7,
    Recuperacao: media >= 5,
    Reprovado: media < 5,
  };
  return Object.keys(situacao).find((chave) => situacao[chave]);
}
let notasTurma = [7, 8, 5, 9, 6, 10];
let mediaTurma = gerarRelatorioNotas(notasTurma);

console.log("Média da turma:", mediaTurma);
console.log(verificarAprovacao(mediaTurma));
