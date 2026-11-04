let notas = [5, 8, 6, 9, 4, 10, 7, 3];
let soma = 0;
let contNotasMaiores = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
  if (notas[i] >= 7) {
    contNotasMaiores++;
  }
}
let media = soma / notas.length;

console.log(`A soma total das notas foi de: ${soma.toFixed(2).replaceAll(".", ",")}
A média da turma foi de: ${media.toFixed(2).replaceAll(".", ",")}
A quantidade total de notas maiores ou iguais a 7 foi de: ${contNotasMaiores}`);
