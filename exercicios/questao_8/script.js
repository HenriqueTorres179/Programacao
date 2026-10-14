let gasolina = 5.65;
let etanol = 4.38;
let tipo = prompt(
  "Qual o tipo de combustível deseja abastecer o seu carro? (G para gasolina e E para etanol)",
);
let tanque = +prompt("Qual é a capacidade do tanque em litros?");
let gasto;
if (tipo == "G" || tipo == "g") {
  gasto = gasolina * tanque;
  console.log(
    "O gasto total para encher o tanque com gasolina (em R$) será de: " +
      gasto.toFixed(2),
  );
  alert(
    "O gasto total para encher o tanque com gasolina (em R$) será de: " +
      gasto.toFixed(2),
  );
} else if (tipo == "E" || tipo == "e") {
  gasto = etanol * tanque;
  console.log(
    "O gasto total para encher o tanque com etanol (em R$) será de: " +
      gasto.toFixed(2),
  );
  alert(
    "O gasto total para encher o tanque com etanol (em R$) será de: " +
      gasto.toFixed(2),
  );
} else {
  alert("Tipo de combustível inválido! Digite 'G' ou 'E'");
}
