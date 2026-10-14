//Entrada de Dados
let gados = Number(prompt("Quantos gados são?"));
let herdeiros = Number(prompt("Quantos herdeiros são?"));
//Processamento de Dados
let restante = Math.floor(gados - gados * 0.15);
let herança = Math.floor(restante / herdeiros);
let sobra = restante % herdeiros;
//Saída de Dados
alert(
  `O número de gados para cada herdeiro é de ${herança}, e sobra ${sobra} gado(s).`,
);
