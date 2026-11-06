let precos = [50, 80, 120, 40, 200];
let desconto = 0.1;
precos.forEach((preco, indice) => {
  let precoComDesconto = preco + preco * desconto;
  precos[indice] = precoComDesconto;
});
console.log(
  `Os valores com desconto ficaram, respectivamente: R$${precos.join(", R$")}`,
);
