//Entrada de Dados
let horas = parseFloat(
  prompt("Informe o tempo que foi gasto na viagem em horas?:"),
);
let media = parseFloat(
  prompt("Informe a velocidade média desse veículo em km/hr:"),
);
let consumo_medio = parseFloat(
  prompt("Informe quantos km o veículo faz por litro:"),
);
let preco = parseFloat(
  prompt("Informe o preço do combustível utilizado em R$ por litro:"),
);
//Processamento de Dados
if (isNaN(horas) || isNaN(media) || isNaN(consumo_medio) || isNaN(preco)) {
  alert("Informe apenas números!");
} else {
  let distancia = horas * media;
  let consumo = distancia / consumo_medio;
  let litros = consumo * preco;
  //Saída de Dados
  alert(
    "A distância percorrida foi de " +
      distancia.toFixed(2) +
      " km," +
      " foi cosumido " +
      consumo.toFixed(3) +
      " litros de combustível e " +
      "o preço total dessa viagem será de R$" +
      litros.toFixed(2),
  );
}
