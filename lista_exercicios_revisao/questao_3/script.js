let tarefas = +prompt("Digite a quantidade de tarefas concluídas: ");
let bugs = +prompt("Digite a quantidade de bugs encontrados: ");
let notaAvaliacao = +prompt(
  "Digite a nota de avaliação técnica (de 0 a 10): ",
);
let indice = tarefas * 2 + notaAvaliacao * 10 - bugs * 5;
let desempenho;
if (indice < 50) {
  desempenho = "Insatisfatório!";
} else if (indice >= 50 && indice < 99) {
  desempenho = "Bom!";
} else {
  desempenho = "Excelente!";
}
alert(
  "O índice do desenvolvedor é: " +
    indice +
    "\n E o desempenho é: " +
    desempenho,
);
