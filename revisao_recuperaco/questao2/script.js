//Entrada de Dados
let paginas = parseFloat(
  prompt("Digite o número de páginas a serem digitadas:"),
);
let trabalhadoresAntigos = parseFloat(
  prompt("Digite o número de trabalhadores:"),
);
let tempoEstimado = parseFloat(
  prompt("Digite o tempo total estimado em horas:"),
);
let novosTrabalhadores = parseFloat(
  prompt("Digite o número de novos trabalhadores"),
);
//Processamento de Dados
let equipeAtual = trabalhadoresAntigos + novosTrabalhadores; 
let tempoEstimadoNovo = (trabalhadoresAntigos * tempoEstimado) / equipeAtual;
let paginasMediaDigitador = paginas / (equipeAtual * tempoEstimadoNovo);
let paginasMedia = paginasMediaDigitador * equipeAtual;
//Saída de Dados
alert("Equipe atual: " + equipeAtual);
alert(
  "Quantidade média de páginas por hora da equipe: " + paginasMedia.toFixed(2),
);
alert("Novo tempo estimado: " + tempoEstimadoNovo.toFixed(2) + " horas");
