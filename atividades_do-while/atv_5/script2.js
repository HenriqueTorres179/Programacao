/*
25) Faça um programa em Javascript que leia o salário bruto de uma pessoa e calcule o desconto do
INSS levando em consideração o seguinte:
• Para salários até R$ 1.500,00 a alíquota de INSS será de 8%;
• Para salários acima de R$ 1.500,00 até R$ 3.500,00 a alíquota de INSS será de 10%;
• Para salários acima de R$ 3.500,00 a alíquota de INSS será de 12%.
● Controle de entrada com mensagem de erro: 
o salário bruto deverá ser positivo e inferior a 10 mil reais.
*/
let salBruto;
let inss;
let salLiquido;
let somaSalLiquido = 0;
let contEmpregados = 0;
let continuar;
let contAbaixo1500 = 0;
let contEntre = 0;
let contAcima = 0;

//INÍCIO DO LAÇO PRINCIPAL
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
    contAbaixo1500++;
  } else if (salBruto <= 3500) {
    inss = salBruto * 0.1;
    contEntre++;
  } else {
    inss = salBruto * 0.12;
    contAcima++;
  }
  salLiquido = salBruto - inss;
  alert("Salário líquido: R$ " + salLiquido.toFixed(2));
  somaSalLiquido = somaSalLiquido + salLiquido;
  contEmpregados = contEmpregados + 1;
  do {
    continuar = prompt(
      "Deseja informar outro salário? Digite s ou n",
    ).toLowerCase();
    if (continuar != "s" && continuar != "n") {
      alert("Digite apenas s ou n");
    }
  } while (continuar != "s" && continuar != "n");
} while (continuar == "s");
//FIM DO LAÇO PRINCIPAL
let mediaSalarioLiquido = somaSalLiquido / contEmpregados;
alert("Média dos salários: R$ " + mediaSalarioLiquido.toFixed(2));
let percAbaixo = (contAbaixo1500 / contEmpregados) * 100;
let percEntre = (contEntre / contEmpregados) * 100;
let percAcima = (contAcima / contEmpregados) * 100;
