let salBruto;
let inss;
let salLiquido;
let somaSalLiquido = 0;
let contEmpregados = 0;
let continuar;
//IN?CIO DO LA?O PRINCIPAL
do {
  //entrada
  do {
    salBruto = parseFloat(prompt("Informe o salário bruto: R$ "));
    if (salBruto <= 0 || salBruto >= 10000 || isNaN(salBruto)) {
      alert("Valor inválido");
      alert("Informe valores positivos e menores que 10 mil reais");
    }
  } while (salBruto <= 0 || salBruto >= 10000 || isNaN(salBruto));

  //PROCESSAMENTO
  if (salBruto <= 1500) {
    inss = salBruto * 0.08;
  } else if (salBruto <= 3500) {
    inss = salBruto * 0.1;
  } else {
    inss = salBruto * 0.12;
  }
  salLiquido = salBruto - inss;
  alert("Salário l?quido: R$ " + salLiquido.toFixed(2));
  let salarioBruto;
  let salario;
  let desconto;
  do {
    salarioBruto = +prompt("Digite o salário bruto em reais:");
    if (salarioBruto <= 0 || salarioBruto >= 10000 || isNaN(salarioBruto)) {
      alert("Erro! O salário deve ser maior que 0 e menor que 10000!");
    }
  } while (salarioBruto <= 0 || salarioBruto >= 10000 || isNaN(salarioBruto));
  if (salarioBruto <= 1500) {
    desconto = 0.08;
  } else if (salarioBruto <= 3500) {
    desconto = 0.1;
  } else {
    desconto = 0.12;
  }
  salario = salarioBruto - salarioBruto * desconto;
  alert("O salário com o desconto do INSS será de: R$" + salario.toFixed(2));

  somaSalLiquido = somaSalLiquido + salLiquido;
  contEmpregados = contEmpregados + 1;

  do {
    continuar = prompt(
      "Deseja informar outro sal?rio? Digite sim ou n?o",
    ).toLowerCase();
    if (continuar !== "sim" || continuar !== "n?o") {
      alert(`Digite apenas "sim" ou "n?o"`);
    }
  } while (continuar !== "sim" || continuar !== "não");
} while (continuar == "sim");
//FIM DO LA?O PRINCIPAL
let mediaSalarioLiquido = somaSalLiquido / contEmpregados;
alert("Média dos sal?rios: R$ " + mediaSalarioLiquido.toFixed(2));
