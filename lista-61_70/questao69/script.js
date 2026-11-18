function filtrarProdutos(precos, limite) {
  let resultado = precos.filter(function (preco) {
    if (preco <= limite) {
      return preco;
    }
  });
  return resultado;
}

console.log(filtrarProdutos([29.9, 45.5, 119.9, 79.9, 25.0], 50));
