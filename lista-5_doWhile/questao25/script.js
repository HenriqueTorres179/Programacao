let nomePonto;
let volumeRejeito;
let valorBase;
let valorRecuperacao;
let contTotal = 0;
let contImpactoCritico = 0;
let contFaixaSevera = 0;
let somaVolume = 0;
let somaValorImpactoCritico = 0;
let maiorVolume = -Infinity;
let menorValorRecuperacao = Infinity;

do {
  // 1. Validação do Nome do Ponto de Extração (mínimo 3 caracteres ou "Sair" para encerrar)[cite: 4]
  do {
    nomePonto = prompt(
      "Digite o nome do ponto de extração (ou 'Sair' para encerrar):",
    );
    let nomeCorrecao = nomePonto !== null ? nomePonto.trim() : "";
    if (nomeCorrecao.length < 3) {
      console.log(
        "O nome do ponto de extração deve conter ao menos 3 caracteres!",
      );
    }
  } while (nomePonto === null || nomePonto.trim().length < 3);

  // Verifica se o usuário digitou "Sair" (ignorando maiúsculas/minúsculas) para forçar a parada[cite: 4]
  if (nomePonto.trim().toLowerCase() === "sair") {
    break;
  }

  // 2. Leitura e Validação do Volume em m³ (positivo e menor que 2.000)[cite: 4]
  do {
    volumeRejeito = +prompt(
      "Digite o volume de rejeito em m³ (maior que 0 e menor que 2000):",
    );
    if (volumeRejeito <= 0 || volumeRejeito >= 2000 || isNaN(volumeRejeito)) {
      console.log("O volume em m³ deve ser positivo e menor que 2.000 m³!");
    }
  } while (volumeRejeito <= 0 || volumeRejeito >= 2000 || isNaN(volumeRejeito));

  somaVolume += volumeRejeito;

  // Maior Volume em m³ informado[cite: 4]
  if (volumeRejeito > maiorVolume) {
    maiorVolume = volumeRejeito;
  }

  // 3. Cálculo Progressivo Acumulado da Taxa de Recuperação[cite: 4]
  if (volumeRejeito <= 200) {
    valorBase = volumeRejeito * 50.0;
  } else if (volumeRejeito <= 600) {
    valorBase = 200 * 50.0 + (volumeRejeito - 200) * 110.0;
  } else {
    valorBase = 200 * 50.0 + 400 * 110.0 + (volumeRejeito - 600) * 220.0;
  }

  // 4. Verificação de "Impacto Crítico Recorrente" (volume > 800 OU valor > 80000.00)[cite: 4]
  valorRecuperacao = valorBase;
  let emImpactoCritico = false;

  if (volumeRejeito > 800 || valorBase > 80000.0) {
    emImpactoCritico = true;
    valorRecuperacao = valorBase * 1.55; // Multiplicador de 1.55 (55% de acréscimo)[cite: 4]
    contImpactoCritico++;
    somaValorImpactoCritico += valorRecuperacao;
  }

  // Menor valor de recuperação calculado[cite: 4]
  if (valorRecuperacao < menorValorRecuperacao) {
    menorValorRecuperacao = valorRecuperacao;
  }

  // Contagem da faixa de impacto severo (acima de 600m³)[cite: 4]
  if (volumeRejeito > 600) {
    contFaixaSevera++;
  }

  contTotal++;
} while (true); // Loop controlado pelo comando "Sair" interno com break[cite: 4]

// Estatísticas e Percentuais Finais[cite: 4]
let mediaVolume = contTotal > 0 ? somaVolume / contTotal : 0;
let mediaFinanceiraImpactoCritico =
  contImpactoCritico > 0 ? somaValorImpactoCritico / contImpactoCritico : 0;
let percFaixaSevera = contTotal > 0 ? (contFaixaSevera / contTotal) * 100 : 0;

// Saída de Dados[cite: 4]
console.log(`--- RELATÓRIO DE COMPENSAÇÃO AMBIENTAL ---
Maior volume em m³ informado: ${maiorVolume} m³[cite: 4]
Menor valor de recuperação calculado: R$ ${menorValorRecuperacao.toFixed(2)}[cite: 4]
Média do volume de extração geral da empresa: ${mediaVolume.toFixed(2)} m³[cite: 4]
Média financeira específica dos pontos "Impacto Crítico Recorrente": R$ ${mediaFinanceiraImpactoCritico.toFixed(2)}[cite: 4]
Percentual de pontos na faixa de impacto severo (acima de 600m³): ${percFaixaSevera.toFixed(2)}%[cite: 4]`);
