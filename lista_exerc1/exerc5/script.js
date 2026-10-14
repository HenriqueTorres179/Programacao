let pintor_horas=parseFloat(prompt(`Quantas horas o pintor irá trabalhar?`));
let pedreiro_horas=parseFloat(prompt(`Quantas horas o pedreiro irá trabalhar?`));
if (isNaN(pintor_horas) || isNaN(pedreiro_horas)){
  alert("Informe uma quantidade de horas válida!")
} else {
  let pintor= (pintor_horas*16)
  let pedreiro= (pedreiro_horas*20)
  //Dados de saída
alert(
  "O custo total do pintor será de: " + pintor.toFixed(2) + " reais.\n" +
  "O custo total do pedreiro será de: " + pedreiro.toFixed(2) + " reais.\n" +
  "O custo total da mão de obra deles será de: " + (pintor + pedreiro).toFixed(2) + " reais."
);
}
