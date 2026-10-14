//Dados de Entrada
let altura_tijolo = parseFloat(prompt("Informe a altura do tijolo em cm:"));
let largura_tijolo = parseFloat(prompt("Informe a largura do tijolo em cm:"));
let altura = parseFloat(
  prompt("Informe a altura da parede que deseja construir em cm:"),
);
let largura = parseFloat(
  prompt("Informe a largura da parede que deseja constuir em cm:"),
);
//Processamento de Dados
let area_tijolo = altura_tijolo * largura_tijolo;
let area_parede = altura * largura;
let parede = area_parede - area_parede * 0.03;
let qntd = parede / area_tijolo;
//Saída de Dados
alert(`A quantidade de tijolos necessários será de ${qntd}`);

//Com if e else
//let altura_tijolo = parseFloat(prompt("Informe a altura do tijolo em cm:"));
//let largura_tijolo = parseFloat(prompt("Informe a largura do tijolo em cm:"));
//let altura = parseFloat(prompt("Informe a altura da parede que deseja construir em cm:"));
//let largura = parseFloat(prompt("Informe a largura da parede que deseja constuir em cm:"));
//if (
//isNaN(altura_tijolo) ||
//isNaN(largura_tijolo) ||
//isNaN(altura) ||
//isNaN(largura)) {
//alert("Informe apenas números!");
//} else {
//Processamento de Dados
// let area_tijolo = altura_tijolo * largura_tijolo;
//let area_parede = altura * largura;
//let parede = area_parede - area_parede * 0.03;
//let qntd = parede / area_tijolo;
//Saída de Dados
//alert(`A quantidade de tijolos necessários será de ${qntd}`)};
