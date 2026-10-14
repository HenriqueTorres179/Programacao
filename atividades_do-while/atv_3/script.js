let nome = prompt("Digite o nome do funcionário:");
let horas;
let excesso = 0;
let salario;
do {
  horas = +prompt("Digite o número de horas trabalhadas:");
  if (horas <= 0 || horas >= 400 || isNaN(horas)) {
    alert("Erro! O número de horas deve ser maior que 0 e menor que 400.");
  }
} while (horas <= 0 || horas >= 400 || isNaN(horas));
if (horas > 160) {
  excesso = horas - 160;
  salario = (horas - excesso) * 10 + excesso * 15;
} else {
  salario = horas * 10;
}
alert("O excesso de horas trabalhadas é igual a: " + excesso);
alert("O valor do salário a ser pago é de: R$" + salario.toFixed(2));
