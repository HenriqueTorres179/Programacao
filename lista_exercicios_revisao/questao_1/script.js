let espacoTotal = +prompt("Digite o espaço total contratado (em GB):");
if (espacoTotal === 0) {
  espacoTotal = +prompt("O espaço total deve ser maior quer 0!");
}
let espacoUsado = +prompt("Digite o espaço total utilizado (em GB):");
let percentual = (espacoUsado / espacoTotal) * 100;
let alerta;

if (percentual <= 50) {
  alerta = "Uso normal!";
} else if (percentual <= 80) {
  alerta = "Atenção: Armazenamento se aproximando do limite!";
} else {
  alerta = "Espaço crítico. Considere ampliar o plano!";
}
alert(alerta);
