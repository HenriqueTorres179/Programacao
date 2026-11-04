let precos = [29.9, 45.5, 119.9, 79.9, 25.0];
let soma = 0;

precos.forEach((preco) => {
  soma += preco;
});
let media = soma / precos.length;

console.log(
  `A soma total dos preços foi de: ${soma.toFixed(2).replace(".", ",")}
  Já a média foi de: ${media.toFixed(2).replace(".", ",")}`,
);
