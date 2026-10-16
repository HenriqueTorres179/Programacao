let temperatura;
let contadorElevado = 0;
for (let i = 0; i < 8; i++) {
  temperatura = +prompt("Digite quanto deu a medição de temperatura!");
  if (temperatura > 5) {
    contadorElevado++;
  }
}
if (contadorElevado == 0) {
  console.log("Não houve registros de temperaturas elevevadas");
} else {
  console.log("O número de medições elevadas foi de: " + contadorElevado);
}
