let salario;
let reajuste = 0;
do {
  salario = +prompt("Digite o salário em reais");
  if (salario <= 0 || salario > 50000 || isNaN(salario)) {
    alert("Erro! O salário deve ser maior que 0 e no máximo R$ 50.000.");
  }
} while (salario <= 0 || salario > 50000 || isNaN(salario));

if (salario <= 2000) {
  reajuste = 0.15;
} else if (salario > 2000 && salario <= 4000) {
  reajuste = 0.1;
} else {
  reajuste = 0.05;
}
let valorAumento = salario * reajuste;
salario += valorAumento;
alert("O valor do aumento será de: R$" + valorAumento.toFixed(2));
alert("O novo salário de acordo com o reajuste, é de: R$" + salario.toFixed(2));
