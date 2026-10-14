//Dados de Entrada
let disciplinas = parseFloat(prompt("Digite o número de disciplinas:"));
let horas = parseFloat(
  prompt("Digite número de horas por disciplina por dia:"),
);
let dias = parseInt(prompt("Digite o número de dias de estudo:"));
//Processamento de Dados
let horas_dia = disciplinas * horas;
let horas_total = horas_dia * dias;
//Saída de Dados
alert(
  "O total de horas estudadas por dia é de: " +
    horas_dia.toFixed(2) +
    "\n O total de horas estudadas no período é de: " +
    horas_total.toFixed(2),
);
