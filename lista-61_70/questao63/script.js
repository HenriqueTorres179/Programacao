function calcularPrecoComDesconto(preco, percentual) {
  return preco - preco * (percentual / 100);
}
console.log(calcularPrecoComDesconto(150, 10));
console.log(calcularPrecoComDesconto(89.9, 15));
console.log(calcularPrecoComDesconto(240, 20));
