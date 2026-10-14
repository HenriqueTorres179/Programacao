let altura = +prompt("Qual é sua altura?(em metros)");
let sexo = prompt("Qual é o seu sexo?(M para mulher e H para homem)");
let pesoIdeal;
if (sexo == "M" || sexo == "m") {
  pesoIdeal = 62.1 * altura - 44.7;
} else if (sexo == "H" || sexo == "h") {
  pesoIdeal = 72.7 * altura - 58;
} else {
  alert("Sexo inválido, digite M ou H");
}
alert("O seu peso ideal em kg é de: " + pesoIdeal.toFixed(3));
