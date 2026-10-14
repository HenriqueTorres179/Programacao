let volume;
let continuar;
let multa;
let somaMulta = 0;
let contMulta = 0;
let somaMultaSuper = 0;
let contMultaSuper;
let contFaixa2;
do {
  //Questão 1
  do {
    volume = +prompt("Volume");
    if (volume < 0 || volume > 500) {
      alert("Volume de emissão inválido");
    }
  } while (volume < 0 || volume > 500);
  //Questão 2
  if (volume <= 15) {
    multa = volume * 40;
  } else if (volume <= 50) {
    multa = 15 * 40 + (volume - 15) * 80;
    contFaixa2++;
  } else if (volume <= 120) {
    multa = 3400 + (volume - 50) * 150;
  } else {
    multa = 13900 + (volume - 120) * 250;
  }
  //Complexidade Adicional
  if (volume > 180 || multa > 20000) {
    alert("Super Emissor Máximo");
    multa = multa * 1.6;
    somaMultaSuper += multa;
    contMultaSuper++;
  }
  //Questão 3
  somaMulta += multa;
  contMulta += 1;
  do {
    continuar = prompt("Deseja continuar?").toLowerCase();
    if (continuar != "s" && continuar != "n") {
      alert("Valor inválido!");
    }
  } while (continuar != "s" && continuar != "n");
} while (continuar == "s");
//Item A - Questão 3
let mediaMulta = somaMulta / contMulta;
alert("Média Financeira Geral: R$" + mediaMulta.toFixed(2));
let multaSuper = somaMultaSuper / contMultaSuper;
let mediaSuper = somaMultaSuper / multaSuper;
alert("Média Super Emissor Máximo:" + mediaSuper.toFixed(2));
let perc1 = (contFaixa2 / contMulta) * 100;
alert("Perc. Faixa 2:" + perc1);
let perc2 = (contMultaSuper / contMulta) * 100;
alert("Perc. Super:" + perc2);
