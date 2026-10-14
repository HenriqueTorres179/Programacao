/* === for of === */
for (const produto of produtos) {
  if (produto.preco <= 0 || produto.preco > 500) {
    console.error(
      `O preço de um produto deve ser maior que 0 e menor ou igual a 500.`
    );
  } else {
    let reajuste = 0;

    console.log(
      `Produto: ${produto.nome}. Preço original: R$${produto.preco.toFixed(2)}.`
    );

    if (produto.preco <= 50) {
      reajuste = 0.1 * produto.preco;
      produto.preco += reajuste;
    } else {
      reajuste = 0.05 * produto.preco;
      produto.preco += reajuste;
    }

    console.log(
      `O valor do reajuste será de: R$${reajuste.toFixed(2)}, e o novo preço será de: R$${produto.preco.toFixed(2)}`
    );
  }
}