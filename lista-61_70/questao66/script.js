function contarPares(numeros) {
  let acumuladorPar = numeros.reduce(function (acumulador, valorAtual) {
    if (valorAtual % 2 === 0) {
      return ++acumulador;
    } else {
      return acumulador;
    }
  }, 0);
  return acumuladorPar;
}

console.log(contarPares([2, 5, 8, 11, 14, 17, 20]));
console.log(contarPares([1, 3, 5, 7]));
console.log(contarPares([10, 12, 14, 16]));
