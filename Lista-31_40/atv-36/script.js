let contadorTotal = 0;
for (let i = 0; i < 5; i++) {
  let consumoDia = +prompt("Digite o consumo de KWh por dia:", "");
  contadorTotal += consumoDia;
}
let media = contadorTotal / 5;
console.log(
  `A média por dia foi de: ${media} e o consumo total foi de: ${contadorTotal}`,
);
