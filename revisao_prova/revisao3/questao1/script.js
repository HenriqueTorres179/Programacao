//Dados de Entrada
let aulas_dia=parseFloat(prompt("Digite o número de aulas por dia:"));
let aulas_minutos=parseFloat(prompt("Digite a duração de cada aula:"));
let dias=parseFloat(prompt("Digite o número de dias trabalhados:"));
//Processamento de Dados
let duracao_dia=aulas_dia*aulas_minutos;
let duracao_minutos=duracao_dia*dias;
let duracao_horas= duracao_minutos/60;
//Saída de Dados
alert("A quantidade total de minutos trabalhados são de: "+duracao_minutos.toFixed(2));
alert("A quantidade total de horas trabalhadas é de:"+duracao_horas.toFixed(2));