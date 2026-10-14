//Dados de Entrada
let dólar_qnt= parseFloat(prompt("A quantidade de dólares é: "));
let dólar_valor=parseFloat(prompt("A cotação do valor é "));
if (isNaN(dólar_qnt)) {
  alert("Informe uma quantidade válida!")
} else {
  let reais= (dólar_qnt*dólar_valor);
  alert(`O valor em reais é: ` + reais.toFixed(2));
}