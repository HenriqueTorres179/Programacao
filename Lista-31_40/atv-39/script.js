let dia;
let contadorTotal = 0;
let contadorAcima = 0;
for (let i = 0; i < 5; i++) {
  dia = +prompt("Digite o valor acumulado de hoje:");
  contadorTotal += dia;
  if (dia > 5000) {
    contadorAcima++;
  }
}
let media = contadorTotal / 5;
console.log(`A média diária foi de: ${media.toFixed(2).replaceAll(".", ",")}
 O faturamento total foi de: ${contadorTotalmedia.toFixed(2).replaceAll(".", ",")}
  E a quantidade de dias com valor recebido maior que 5000, foi de: ${contadorAcimamedia.toFixed(2).replaceAll(".", ",")}`);
