let quilo_valor = 28.0;
let qnt_quilo = parseFloat(prompt(`Qual o peso do seu prato em kg?`));
if (isNaN(qnt_quilo)){
    alert(`Informe um peso válido!`)
} else {
    let valor = quilo_valor * qnt_quilo;
console.log(valor);
alert(`O valor a ser pago pelo seu prato é: ` + valor.toFixed(2));
}