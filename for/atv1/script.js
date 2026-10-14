const produtos = [
  { nome: "Arroz 5kg", preco: 28.0 },

  { nome: "Azeite de Oliva", preco: 62.0 },

  { nome: "Item Invalido", preco: -10.0 }, // Deve cair no controle de erro

  { nome: "Cafe 500g", preco: 18.5 },
];

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].preco <= 0 || produtos[i].preco > 500) {
    console.error(
      `O preço de um produto deve ser maior que 0 e igual ou inferior a 500.`,
    );
  } else {
    let reajuste = 0;

    console.log(`Produto: ${produtos[1].nome}. Preço: R$${produtos[i].preco}.`);

    if (produtos[i].preco <= 50) {
      reajuste = 0.1 * produtos[i].preco;

      produtos[i].preco += reajuste;
    } else {
      reajuste = 0.05 * produtos[i].preco;

      produtos[i].preco += reajuste;
    }

    console.log(
      `O reajuste será de: R$${reajuste.toFixed(2)}, e o novo preço será de: R$${preco.toFixed(2)}`,
    );
  }
}