const trabalhadores = [
  { nome: "Ana", horas: 150 },
  { nome: "Roberto", horas: 170 },
  { nome: "Carla", horas: 360 },
  { nome: "Diego", horas: 160 },
];

for (let i = 0; i < trabalhadores.length; i++) {
  if (trabalhadores[i].horas >= 350 || trabalhadores[i].horas < 0) {
    console.error(
      `Erro: ${trabalhadores[i].nome} tem ${trabalhadores[i].horas} horas. As horas devem ser positivas e inferiores a 350!`,
    );
  } else {
    let horasExtra = 0;
    let pagamento = 0;

    console.log(
      `Trabalhador: ${trabalhadores[i].nome} tem ${trabalhadores[i].horas} horas registradas.`,
    );

    if (trabalhadores[i].horas > 160) {
      horasExtra = trabalhadores[i].horas - 160;
      pagamento = horasExtra * 18 + 160 * 12;
    } else {
      pagamento = trabalhadores[i].horas * 12;
    }

    if (horasExtra > 0) {
      console.log(
        `O pagamento total será de: R$${pagamento.toFixed(2)}, e a quantidade total de horas extras foi de: ${horasExtra}.`,
      );
    } else {
      console.log(
        `O pagamento total será de: R$${pagamento.toFixed(2)}, e não houve horas extras.`,
      );
    }
  }
}
