const vendedores = [
  { nome: "Lucas", vendas: 8000 },

  { nome: "Mariana", vendas: 15000 },

  { nome: "Carlos", vendas: -500 }, // Deve cair no controle de erro

  { nome: "Beatriz", vendas: 10000 },
];

for (let i = 0; i < vendedores.length; i++) {
  if (vendedores[i].vendas < 0 || vendedores[i].vendas > 100000) {
    console.error(
      `O valor das vendas de um vendedor deve ser postivo e igual ou menor que 100 mil.`,
    );
  } else {
    let pagamento = 1800;

    let comissão = 0;

    console.log(
      `Vendedor: ${vendedores[i].nome}. Vendas: R$${vendedores[i].vendas}.`,
    );

    if (vendedores[i].vendas <= 10000) {
      comissão = 0.05 * vendedores[i].vendas;

      pagamento += comissão;
    } else {
      comissão = 0.08 * vendedores[i].vendas;

      pagamento += comissão;
    }

    console.log(
      ` A comissão será de: R$${comissão.toFixed(2)}, e o salário final será de: R$${pagamento.toFixed(2)}`,
    );
  }
}
