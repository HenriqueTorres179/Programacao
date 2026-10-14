let resposta = "sim";
let numeroTabuada;

while (resposta === "sim") {
  do {
    let entrada = prompt("Digite o número ao qual deseja ver a tabuada");

    if (entrada === null) {
      entrada = "";
    }

    numeroTabuada = Number(entrada);

    if (entrada.trim() === "" || numeroTabuada <= 0 || isNaN(numeroTabuada)) {
      alert("Digite um número positivo válido!");
    } else {
      numeroTabuada = Math.trunc(numeroTabuada);
    }
  } while (numeroTabuada <= 0 || isNaN(numeroTabuada));

  for (let i = 1; i <= 10; i++) {
    let resultadoTabuada = numeroTabuada * i;
    console.log(`${numeroTabuada} x ${i} = ${resultadoTabuada}`);
  }

  do {
    resposta = prompt(
      "Digite 'sim' para continuar e 'não' para parar de fazer a tabuada",
    )
      .trim()
      .toLowerCase();
  } while (resposta !== "sim" && resposta !== "não");
}
