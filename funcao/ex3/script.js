let temperaturas = [18, 22, 16, 25, 19, 27, 21];

function encontrarMaior(valores) {
  let maior = valores[0];

  valores.forEach(function (temperatura) {
    if (temperatura > maior) {
      maior = temperatura;
    }
  });
  return maior;
}
console.log(encontrarMaior(temperaturas));
