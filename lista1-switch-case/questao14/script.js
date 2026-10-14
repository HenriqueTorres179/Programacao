let saldo = 1000;
let operacao = +prompt(
  "Digite 1 para consultar saldo, 2 para saque e 3 para depósito",
);

switch (operacao) {
  case 1:
    alert("O saldo disponível é: R$" + saldo.toFixed(2));
    break;

  case 2: {
    let saque = +prompt("Digite o valor do saque em reais:");
    if (saque <= saldo) {
      saldo -= saque;
      alert("O novo saldo é: R$" + saldo.toFixed(2));
    } else {
      alert("Saldo insuficiente!");
    }
    break;
  }

  case 3: {
    let deposito = +prompt("Digite o valor do depósito em reais:");
    saldo += deposito;
    alert("O novo saldo é: R$" + saldo.toFixed(2));
    break;
  }

  default:
    alert("Opção inválida");
}
