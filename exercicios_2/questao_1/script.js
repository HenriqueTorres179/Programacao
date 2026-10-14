let numero = parseFloat(prompt("Digite um número!"));
let positivoNegativo;

if (isNaN(numero)) {
  alert("Digite um número!");
} else {
  if (numero > 0) {
    positivoNegativo = "Positivo!";
  } else if (numero < 0) {
    positivoNegativo = "Negativo!";
  } else {
    positivoNegativo = "Zero!";
  }
alert("O número é: " + positivoNegativo);}

