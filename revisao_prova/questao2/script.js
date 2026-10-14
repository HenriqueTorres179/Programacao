//Dados de Entrada
let compra = parseFloat(prompt("Digite o valor da compra em reais:"));
let parcelasTotal = parseFloat(prompt("Digite o número de parcelas:"));
let juros = parseFloat(prompt("Digite o percentual de acréscimo do juros:"));
//Processamento de Dados
let acrescimo = juros / 100;
let valor = compra + acrescimo;
let valorParcelas = valor / parcelasTotal;
//Saída de Dados
alert("O valor do acréscimo é de: R$" + acrescimo.toFixed(2));
alert("O valor final da compra é de: R$" + valor.toFixed(2));
alert("O valor de cada parcela é de: R$" + valorParcelas.toFixed(2));
