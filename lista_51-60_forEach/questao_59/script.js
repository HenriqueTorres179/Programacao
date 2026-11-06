let notas = [5.5, 8.0, 6.5, 9.0, 4.5, 10.0, 7.0, 3.5, 8.5];
let soma = 0;
let notasMaioresQueSete = 0;
let maior = -Infinity;
notas.forEach((nota) => {
  soma += nota;
  if (nota > maior) {
    maior = nota;
  }
  if (nota >= 7) {
    notasMaioresQueSete++;
  }
});
let media = soma / notas.length;
console.log(
  `A soma total foi de: ${soma}, a média da turma foi de: ${media.toFixed(2).replace(".", ",")},
  a quantidade de notas maiores ou iguais a 7 foi de: ${notasMaioresQueSete},
  e a maior nota foi: ${maior}`,
);
