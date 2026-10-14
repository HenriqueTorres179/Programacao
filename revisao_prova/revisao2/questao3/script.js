//Entrada de Dados
let entregas = parseInt(prompt("Digite o número de entregadas realizadas:"));
let tempo = parseFloat(
  prompt("Digite o número de minutos demorados por entrega:"),
);
let consumo = parseFloat(
  prompt("Digite o consumo médio de litros de combustível por entrega:"),
);
let preco = parseFloat(
  prompt("Digite o preço do litro de combustível em reais:"),
);
//Processamento de Dados
let tempo_minutos = entregas * tempo;
let tempo_horas_total = tempo_minutos / 60;
let consumo_total = entregas * consumo;
let custo = preco * consumo_total;
let custo_medio = custo / entregas;
//Saída de Dados
alert(
  " O tempo total gasto foi de: " +
    tempo_horas_total.toFixed(2) +
    ".\n O consumo total de combustível em liros foi de: " +
    consumo_total.toFixed(3) +
    ".\n O custo total do combustível em reais foi de: " +
    custo.toFixed(2) +
    "\n e o custo médio em reais por entrega foi de: " +
    custo_medio.toFixed(2),
);
