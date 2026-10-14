let salario = +prompt("Digite o salário: ");
while (isNaN(salario)) {
  salario = +prompt("Digite um salário válido!");
}
let imposto;
if (salario <= 2500) {
  imposto = 0;
} else if (salario <= 5000) {
  imposto = salario * 0.15;
} else {
  imposto = salario * 0.27;
}
imposto = imposto.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
alert("O valor do imposto é " + imposto);
