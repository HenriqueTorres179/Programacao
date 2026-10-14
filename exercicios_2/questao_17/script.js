let salario = +prompt("Digite o salário mensal do cliente: (em R$)");
let prestacao = +prompt("Digite o valor da prestação: ");
let tempoEmprego = +prompt(
  "Digite o tempo de trabalho no emprego atual: (em anos)",
);

let aprovacao;

let rendaComprometida = (prestacao / salario) * 100;
if (prestacao <= salario * 0.3 && tempoEmprego >= 2) {
  aprovacao = "aprovado!";
} else {
  aprovacao = "não foi aprovado!";
}

if (aprovacao === "aprovado!") {
  alert(
    "O financiamento foi: " +
      aprovacao +
      "\n E a renda comprometida será (em percentual):  " +
      rendaComprometida.toFixed(2) +
      "%",
  );
} else {
  alert(
    "O financiamento " +
      aprovacao +
      "\nA renda testada seria de: " +
      rendaComprometida.toFixed(2) +
      "%",
  );
}
