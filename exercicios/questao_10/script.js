let salario = +prompt("Qual o salário atual do funcionário?");
let reajuste;
let salarioNovo;

if (salario < 1500) {
  reajuste = salario * 0.15;
  salarioNovo = salario + reajuste;
} else if (salario >= 1500 && salario <= 3000) {
  reajuste = salario * 0.1;
  salarioNovo = salario + reajuste;
} else {
  reajuste = salario * 0.05;
  salarioNovo = salario + reajuste;
}
alert(
  "O reajuste será de(em R$): " +
    reajuste.toFixed(2) +
    " e o salário novo será de (em R$): " +
    salarioNovo.toFixed(2),
);
