
let precoProduto = parseFloat(prompt("Qual o valor do produto?"));
let precoPago = parseFloat(prompt("Qual o valor pago?"));

if (isNaN(precoPago) || isNaN(precoProduto)) {
    alert("Digite valores válidos!");
} else {
    let troco = precoPago - precoProduto;
    console.log(troco);
    alert(`O troco será de: `+troco.toFixed(2));
}