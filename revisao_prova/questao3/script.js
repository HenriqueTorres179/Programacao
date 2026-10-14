//Dados de Entrada
let larguraPiso = parseFloat(prompt("Digite a largura do piso:"));
let comprimentoPiso = parseFloat(prompt("Digite o comprimento do piso:"));
let peca = parseFloat(prompt("Digite em metros quadrados a área coberta por cada peça:"));
let percentual = parseFloat(prompt("Digite o percentual de perda:"));
let valor = parseFloat(prompt("Digite o preço por peça:"));
//Processamento de Dados
let area = larguraPiso * comprimentoPiso;
let perda = percentual / 100;
let areaPerda = area + area * perda;
let quantidadePecas = areaPerda / peca;
let custo = quantidadePecas * valor;
//Saída de Dados
alert("A área total do piso em metros quadrados é de: " + area.toFixed(2));
alert("A área com perda em metros quadrados é de: " + areaPerda.toFixed(2));
alert("A quantidade de peças necessárias será de:" + quantidadePecas.toFixed(2));
alert("O custo total será de: R$" + custo.toFixed(2));
