let saldo = +prompt("Digite o seu saldo médio:");
while (isNaN(saldo)) {
  saldo = +prompt("Digite um saldo válido!");
}
let valorCredito;
if (saldo <= 500) {
  valorCredito = "Nenhum valor";
} else if (saldo > 500 && saldo <= 1000) {
  valorCredito = saldo * 0.3;
} else {
  valorCredito = saldo * 0.5;
}
valorCredito = valorCredito.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
alert("Você possui " + valorCredito + " de crédito!");
