let nome;
let salarioFinal;
let horas;
let horasExtra = 0;
let totalSalarios = 0;
let quantidadeEmpregados = 0;
let salarioAcima = 0;
let continuar;
let mediaSalarios;
let percentualSalario;

do {
  nome = prompt("Digite o nome do trabalhador:");

  // Repete a pergunta até que o usuário digite um valor válido
  do {
    horas = +prompt("Digite o total de horas trabalhadas:");
    if (horas <= 0 || horas >= 400 || isNaN(horas)) {
      alert(
        "As horas trabalhadas devem ser um número positivo e menor que 400",
      );
    }
  } while (horas <= 0 || horas >= 400 || isNaN(horas));

  if (horas > 160) {
    horasExtra = horas - 160;
    salarioFinal = 160 * 10 + horasExtra * 15;
  } else {
    horasExtra = 0;
    salarioFinal = horas * 10;
  }

  alert(`Operário: ${nome}\nSalário Final: R$ ${salarioFinal.toFixed(2)}`);
  totalSalarios += salarioFinal;
  quantidadeEmpregados++;

  if (salarioFinal > 5000) {
    salarioAcima++;
  }

  do {
    continuar = prompt("Deseja informar outro empregado? (sim/nao)")
      .toLowerCase()
      .trim();
  } while (continuar !== "sim" && continuar !== "nao");
} while (continuar === "sim");

mediaSalarios = totalSalarios / quantidadeEmpregados;
percentualSalario = (salarioAcima / quantidadeEmpregados) * 100;

alert(
  `Média dos salários finais: R$ ${mediaSalarios.toFixed(2)}\n` +
    `Percentual de salários acima de R$5.000,00: ${percentualSalario.toFixed(2)}%`,
);
