const horas = { hora_inicial: 0, hora_final: 0 };
let duracao;
let invalido;

do {
  horas.hora_inicial = +prompt("Que horas começou o trabalho?");
  horas.hora_final = +prompt("Que horas terminou o trabalho?");
  invalido =
    horas.hora_inicial < 0 ||
    horas.hora_inicial > 23 ||
    isNaN(horas.hora_inicial) ||
    horas.hora_final < 0 ||
    horas.hora_final > 23 ||
    isNaN(horas.hora_final);

  if (invalido) {
    alert("Erro! Digite horas válidas entre 0 e 23!");
  }
} while (invalido);

if (horas.hora_final > horas.hora_inicial) {
  duracao = horas.hora_final - horas.hora_inicial;
} else {
  duracao = 24 - horas.hora_inicial + horas.hora_final;
}

alert(`O tempo de duração é de: ${duracao} hora(s).`);
