//Entrade de Dados
let peso = parseFloat(prompt("Digite seu peso:"));
//Processamento de Dados
let peso_mais = 0.15 * peso + peso;
let peso_menos = 0.2 * peso - peso;
//Saída de Dados
alert(
  `Caso você engorde 15%, seu peso será de: ` +
    peso_mais.toFixed(3) +
    " kg." +
    " Caso você emagreça 20%, seu peso será de: " +
    peso_menos.toFixed(3) +
    " kg.",
);
