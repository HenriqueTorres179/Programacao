function reajustarPrecos(precos, percentual) {
  /*let novosPrecos = [];
  let preco;
  for (let i = 0; i < precos.length; i++) {
    preco = precos[i] + precos[i] * (percentual / 100);
    novosPrecos.push(preco);
  }
  return novosPrecos;
  */
  let novosPrecos = precos.map(function (preco) {
    preco += preco * (percentual / 100);
    return preco;
  });
  return novosPrecos;
}

let precos = [50, 80, 120, 200];
let reajustados = reajustarPrecos(precos, 8);
console.log(
  `Array original: ${precos.join(", ")}. Array reajustado: ${reajustados.join(", ")}`,
);
