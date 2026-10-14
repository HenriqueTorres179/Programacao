/* === Lista e variáveis === */

const clientes = [
  { nome: "Marcos", consumoKwh: 120 },
  { nome: "Juliana", consumoKwh: 220 },
  { nome: "Cliente Invalido", consumoKwh: -50 }, // Deve cair no controle de erro
  { nome: "Fernanda", consumoKwh: 150 },
];

let somaTotal = 0;

/* === for...of === */

for (const cliente of clientes) {
  if (
    cliente.consumoKwh < 0 ||
    cliente.consumoKwh > 1000 ||
    isNaN(cliente.consumoKwh)
  ) {
    console.error(
      `Erro! O consumo de kWh deve ser positivo e menor ou igual a 1000.`,
    );
  } else {
    let soma = 0;

    console.log(
      `Cliente: ${cliente.nome}. Consumo: ${cliente.consumoKwh.toFixed(2)} kWh.`,
    );

    if (cliente.consumoKwh <= 150) {
      soma = cliente.consumoKwh * 0.6;
    } else {
      soma = cliente.consumoKwh * 0.85;
    }

    somaTotal += soma;

    console.log(
      `O valor individual da fatura desse cliente será de: R$${soma.toFixed(2)}`,
    );
  }
}
console.log(
  `\nA soma total das faturas desses clientes foi de: R$${somaTotal.toFixed(2)}`,
);
