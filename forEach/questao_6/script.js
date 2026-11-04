let notas = [3, 10, 6, 9, 5];
let soma = 0;
notas.forEach((nota) => {
  soma += nota;
});
console.log(`A soma total é de: ${soma.toFixed(2).replace(".", ",")}`);
