let termometro = +prompt("Qual a temperatura que o termômetro leu? (em C°)");
let temperatura;
if (termometro < 100) {
  temperatura = "Está muita baixa!";
} else if (termometro >= 100 && termometro <= 200) {
  temperatura = "Está baixa!";
} else if (termometro > 200 && termometro < 500) {
  temperatura = "Está normal!";
} else {
  temperatura = "Está muito alta!";
}
alert("A temperatura (em c°) é de: " + temperatura);
