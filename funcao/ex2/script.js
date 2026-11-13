let precos = [29.9, 45.5, 119.9, 79.9, 25.0];

function calcularMedia(valores) {
  let soma = 0;

  valores.forEach(function (preco) {
    soma += preco;
  });
  return soma / valores.length;
}
let media = calcularMedia(precos);
console.log(media.toFixed(2).replace(".", ","));
