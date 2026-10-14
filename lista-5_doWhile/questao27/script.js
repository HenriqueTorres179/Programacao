let placaVeiculo;
let pbe;
let pedagioBruto;
let pedagioFinal;
let contTotal = 0;
let contAltoDesgaste = 0;
let contFaixaEstavel = 0;
let somaPedagioFinal = 0;
let somaPbeAltoDesgaste = 0;
let menorPbe = Infinity;
let maiorPedagioFinal = -Infinity;
let resposta = "n";

do {
  // 1. Validação da Placa do Veículo (deve possuir 7 ou 8 caracteres)[cite: 4]
  do {
    placaVeiculo = prompt("Digite a placa do veículo (7 ou 8 caracteres):");
    let placaCorrecao = placaVeiculo !== null ? placaVeiculo.trim() : "";
    if (placaCorrecao.length !== 7 && placaCorrecao.length !== 8) {
      console.log(
        "A placa do veículo deve obedecer ao padrão de tamanho de 7 ou 8 caracteres!",
      );
    }
  } while (
    placaVeiculo === null ||
    (placaVeiculo.trim().length !== 7 && placaVeiculo.trim().length !== 8)
  );

  // 2. Leitura e Validação do PBE em toneladas (estritamente positivo e não ultrapassar 80 toneladas)[cite: 4]
  do {
    pbe = +prompt(
      "Digite o peso bruto por eixo (PBE) em toneladas (maior que 0 e até 80t):",
    );
    if (pbe <= 0 || pbe > 80 || isNaN(pbe)) {
      console.log(
        "O PBE informado deve ser estritamente positivo e não ultrapassar 80 toneladas!",
      );
    }
  } while (pbe <= 0 || pbe > 80 || isNaN(pbe));

  // Menor PBE informado[cite: 4]
  if (pbe < menorPbe) {
    menorPbe = pbe;
  }

  // 3. Cálculo Progressivo do Pedágio Técnico em 4 blocos[cite: 4]
  if (pbe <= 12) {
    pedagioBruto = pbe * 80.0;
  } else if (pbe <= 24) {
    pedagioBruto = 12 * 80.0 + (pbe - 12) * 170.0;
  } else if (pbe <= 40) {
    pedagioBruto = 12 * 80.0 + 12 * 170.0 + (pbe - 24) * 310.0;
  } else {
    pedagioBruto = 12 * 80.0 + 12 * 170.0 + 16 * 310.0 + (pbe - 40) * 500.0;
  }

  // 4. Verificação de "Carga de Alto Desgaste Asfáltico" (PBE > 45t OU pedágio bruto > 15000.00)[cite: 4]
  pedagioFinal = pedagioBruto;
  let emAltoDesgaste = false;

  if (pbe > 45 || pedagioBruto > 15000.0) {
    emAltoDesgaste = true;
    pedagioFinal = pedagioBruto * 1.65; // Adiciona taxa de infraestrutura de 65%[cite: 4]
    contAltoDesgaste++;
    somaPbeAltoDesgaste += pbe;
  }

  somaPedagioFinal += pedagioFinal;

  // Maior pedágio final calculado no encerramento[cite: 4]
  if (pedagioFinal > maiorPedagioFinal) {
    maiorPedagioFinal = pedagioFinal;
  }

  // Contagem da faixa estável inicial (até 12t)[cite: 4]
  if (pbe <= 12) {
    contFaixaEstavel++;
  }

  contTotal++;

  // 5. Continuar ou Não (até responder "n")[cite: 4]
  do {
    let respPrompt = prompt("Digite 's' para continuar e 'n' para parar:");
    resposta = respPrompt !== null ? respPrompt.toLowerCase().trim() : "";
    if (resposta !== "s" && resposta !== "n") {
      console.log("Digite apenas 's' ou 'n'.");
    }
  } while (resposta !== "s" && resposta !== "n");
} while (resposta === "s");

// Estatísticas Finais[cite: 4]
let mediaPedagioGeral = contTotal > 0 ? somaPedagioFinal / contTotal : 0;
let mediaPbeAltoDesgaste =
  contAltoDesgaste > 0 ? somaPbeAltoDesgaste / contAltoDesgaste : 0;
let percFaixaEstavel = contTotal > 0 ? (contFaixaEstavel / contTotal) * 100 : 0;

// Saída de Dados[cite: 4]
console.log(`--- RELATÓRIO DO PEDÁGIO DE INFRAESTRUTURA ---
Menor PBE informado: ${menorPbe}t[cite: 4]
Maior pedágio final calculado: R$ ${maiorPedagioFinal.toFixed(2)}[cite: 4]
Média geral do pedágio cobrado da frota: R$ ${mediaPedagioGeral.toFixed(2)}[cite: 4]
Média específica de PBE das carretas "Alto Desgaste": ${mediaPbeAltoDesgaste.toFixed(2)}t[cite: 4]
Percentual de caminhões na faixa estável inicial (até 12t): ${percFaixaEstavel.toFixed(2)}%[cite: 4]`);
