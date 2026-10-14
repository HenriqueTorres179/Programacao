let lacreReefer;
let volumeEmissao;
let taxaBruta = 0;
let taxaFinal = 0;
let contTotal = 0;
let contInadequacaoCritica = 0;
let contFaixa2 = 0;
let somaTaxaFinal = 0;
let somaEmissaoCritica = 0;
let maiorVolume = -Infinity;
let menorVolume = Infinity;
let maiorTaxaFinal = -Infinity;
let menorTaxaFinal = Infinity;
let resposta = "n";

do {
  // 1. Validação da Identificação do Lacre do Reefer (não pode ser vazia e deve conter exatamente 8 dígitos numéricos)[cite: 4]
  do {
    lacreReefer = prompt(
      "Digite o lacre do reefer (exatamente 8 dígitos numéricos):",
    );
    let lacreCorrecao = lacreReefer !== null ? lacreReefer.trim() : "";

    // Verifica se tem 8 caracteres e se todos são números
    let ehNumero = !isNaN(lacreCorrecao) && lacreCorrecao !== "";

    if (lacreCorrecao.length !== 8 || !ehNumero) {
      console.log(
        "A identificação do lacre do reefer não pode ser vazia e deve conter exatamente 8 dígitos numéricos!",
      );
    }
  } while (
    lacreReefer === null ||
    lacreReefer.trim().length !== 8 ||
    isNaN(lacreReefer.trim())
  );

  // 2. Leitura e Validação do Volume de Emissão de Gases (positivo/zero e limite de 900 kgCO2e)[cite: 4]
  do {
    volumeEmissao = +prompt(
      "Digite o volume de emissão de gases em kgCO2e (0 a 900):",
    );
    if (volumeEmissao < 0 || volumeEmissao > 900 || isNaN(volumeEmissao)) {
      console.log("Volume de HFC inválido!");
    }
  } while (volumeEmissao < 0 || volumeEmissao > 900 || isNaN(volumeEmissao));

  // Mapeamento de Maior e Menor Volume de Emissão[cite: 4]
  if (volumeEmissao > maiorVolume) {
    maiorVolume = volumeEmissao;
  }
  if (volumeEmissao < menorVolume) {
    menorVolume = volumeEmissao;
  }

  // 3. Cálculo da Taxa de Compensação Ambiental por 4 Faixas Críticas Acumuladas[cite: 4]
  if (volumeEmissao <= 50) {
    // Faixa 1 (Até 50 kgCO2e): Paga R$ 60,00 por kg emitido[cite: 4]
    taxaBruta = volumeEmissao * 60.0;
  } else if (volumeEmissao <= 150) {
    // Faixa 2 (Acima de 50 até 150 kgCO2e): Primeiros 50 kg a R$ 60,00 + excedente a R$ 110,00[cite: 4]
    taxaBruta = 50 * 60.0 + (volumeEmissao - 50) * 110.0;
    contFaixa2++; // Conta quem ficou estritamente na Faixa Secundária (Faixa 2)[cite: 4]
  } else if (volumeEmissao <= 350) {
    // Faixa 3 (Acima de 150 até 350 kgCO2e): R$ 14.000,00 fixos pelas anteriores + R$ 220,00 por kg excedente[cite: 4]
    // Base acumulada até 150kg = (50 * 60) + (100 * 110) = 3000 + 11000 = 14000
    taxaBruta = 14000.0 + (volumeEmissao - 150) * 220.0;
  } else {
    // Faixa 4 (Acima de 350 kgCO2e): R$ 58.000,00 fixos pelas anteriores + R$ 400,00 por kg acima de 350[cite: 4]
    // Base acumulada até 350kg = 14000 + (200 * 220) = 14000 + 44000 = 58000
    taxaBruta = 58000.0 + (volumeEmissao - 350) * 400.0;
  }

  // 4. Regra de Complexidade Adicional: Inadequação Ecológica Crítica (volume > 400 OU taxa bruta > 75000.00)[cite: 4]
  taxaFinal = taxaBruta;
  let inadequacaoCritica = false;

  if (volumeEmissao > 400 || taxaBruta > 75000.0) {
    inadequacaoCritica = true;
    taxaFinal = taxaBruta * 1.75; // Penalidade fiscal severa de 75% de acréscimo[cite: 4]
    contInadequacaoCritica++;
    somaEmissaoCritica += volumeEmissao;
  }

  somaTaxaFinal += taxaFinal;

  // Mapeamento de Maior e Menor Taxa de Compensação Final[cite: 4]
  if (taxaFinal > maiorTaxaFinal) {
    maiorTaxaFinal = taxaFinal;
  }
  if (taxaFinal < menorTaxaFinal) {
    menorTaxaFinal = taxaFinal;
  }

  contTotal++;

  // 5. Mecânica Principal (do...while) com toLowerCase() obrigatório para "s" ou "n"[cite: 4]
  do {
    let respPrompt = prompt(
      "Deseja continuar cadastrando viagens? Digite 's' para sim ou 'n' para parar:",
    );
    resposta = respPrompt !== null ? respPrompt.toLowerCase().trim() : "";
    if (resposta !== "s" && resposta !== "n") {
      console.log("Entrada inválida! Digite obrigatoriamente 's' ou 'n'.");
    }
  } while (resposta !== "s" && resposta !== "n");
} while (resposta === "s");

// Tratamento Estatístico Final[cite: 4]
let mediaFinanceiraGeral = contTotal > 0 ? somaTaxaFinal / contTotal : 0;
let mediaEmissaoCritica =
  contInadequacaoCritica > 0 ? somaEmissaoCritica / contInadequacaoCritica : 0;
let percFaixa2 = contTotal > 0 ? (contFaixa2 / contTotal) * 100 : 0;
let percInadequacaoCritica =
  contTotal > 0 ? (contInadequacaoCritica / contTotal) * 100 : 0;

// Exibição dos Blocos de Alerta Finais[cite: 4]
console.log(`--- RELATÓRIO DE AUDITORIA INTERNA DE CARBONO (REEFERS) ---
1. Maior volume de emissão digitado: ${maiorVolume} kgCO2e[cite: 4]
2. Menor volume de emissão digitado: ${menorVolume} kgCO2e[cite: 4]
3. Maior taxa de compensação final calculada: R$ ${maiorTaxaFinal.toFixed(2)}[cite: 4]
4. Menor taxa de compensação final calculada: R$ ${menorTaxaFinal.toFixed(2)}[cite: 4]
--------------------------------------------------------------
a) Média financeira geral do custo de compensação técnica: R$ ${mediaFinanceiraGeral.toFixed(2)}[cite: 4]
b) Média de emissão específica (Inadequação Ecológica Crítica): ${mediaEmissaoCritica.toFixed(2)} kgCO2e[cite: 4]
c) Percentual 1 (Proporção na Faixa Estável Secundária - Faixa 2): ${percFaixa2.toFixed(2)}%[cite: 4]
d) Percentual 2 (Proporção total de equipamentos classificados em Inadequação Crítica): ${percInadequacaoCritica.toFixed(2)}%[cite: 4]`);
