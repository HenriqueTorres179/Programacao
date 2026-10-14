let valorQuilo = parseFloat(prompt(`Qual o preço do quilo?`));
let qntQuilo = parseFloat(prompt(`Quantos quilos foram consumidos?`));

if (isNaN(valorQuilo) || isNaN(qntQuilo)) {
  alert(`Informe um valor válido!`);
} else {
  let valorFinal = valorQuilo * qntQuilo;
  alert(`O valor final a ser pago é: ` + valorFinal.toFixed(2));
}
