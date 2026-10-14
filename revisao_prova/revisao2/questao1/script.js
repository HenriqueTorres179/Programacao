//Dados de Entrada
let litros_inicio = parseFloat(
  prompt("Digite o total de litros antes do abastecimento:"),
);
let litros_hora = parseFloat(
  prompt("Digite quantos litros são adicionados por hora:"),
);
let horas = parseFloat(
  prompt("Digite por quantas horas esse reservatório será abastecido:"),
);
//Processamento de Dados
let qnt_litros = litros_hora * horas;
let litros = litros_inicio + qnt_litros;
//Saída de Dados
alert("O volume final em litros é de: " + litros.toFixed(3));
