let notas = [6, 8, 5, 9, 7, 4, 10, 6];

function contarAprovados(valores) {
  let quantidade = 0;

  valores.forEach(function (valor) {
    if (valor >= 7) {
      quantidade++;
    }
  });

  return quantidade;
}
console.log(contarAprovados(notas));
