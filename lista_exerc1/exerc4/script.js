let quilo_preço = parseFloat(prompt(`Digite o preço do quilo`));
let valor_final = parseFloat(prompt(`Digite o valor final pago`));

if (isNaN(quilo_valor) || isNaN(valor_final)) {
  alert(`O valor digitado é inválido!`);
} else {
  let valor_consumido = valor_final / quilo_preço;
  alert(`A quantidade consumida em quilos foi: ` + valor_consumido.toFixed(3) + " kg");
}
