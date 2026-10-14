let nomePropriedade;
let volumeBiogas;
let bonusBruto;
let bonusFinal;
let contTotal = 0;
let contSeloOuro = 0;
let contFaixaBasica = 0;
let somaBonusFinal = 0;
let somaBiogasSeloOuro = 0;
let maiorVolume = -Infinity;
let menorBonusFinal = Infinity;
let resposta = "n";

do {
  // 1. Validação do Nome da Propriedade Rural (mínimo 5 caracteres)[cite: 4]
  do {
    nomePropriedade = prompt(
      "Digite o nome da propriedade rural (mínimo 5 caracteres):",
    );
    let nomeCorrecao = nomePropriedade !== null ? nomePropriedade.trim() : "";
    if (nomeCorrecao.length < 5) {
      console.log(
        "O nome da propriedade rural deve ter no mínimo 5 caracteres!",
      );
    }
  } while (nomePropriedade === null || nomePropriedade.trim().length < 5);

  // 2. Leitura e Validação do Volume de Biogás (obrigatório positivo e não exceder 4.000 m³)[cite: 4]
  do {
    volumeBiogas = +prompt(
      "Digite o volume de biogás em m³ (positivo e até 4000):",
    );
    if (volumeBiogas <= 0 || volumeBiogas > 4000 || isNaN(volumeBiogas)) {
      console.log(
        "O volume de biogás deve ser obrigatoriamente positivo e não exceder 4.000 m³!",
      );
    }
  } while (volumeBiogas <= 0 || volumeBiogas > 4000 || isNaN(volumeBiogas));

  // Maior volume de biogás inserido[cite: 4]
  if (volumeBiogas > maiorVolume) {
    maiorVolume = volumeBiogas;
  }

  // 3. Cálculo Progressivo Acumulado do Bônus Financeiro[cite: 4]
  if (volumeBiogas <= 500) {
    bonusBruto = volumeBiogas * 2.5;
  } else if (volumeBiogas <= 1200) {
    bonusBruto = 500 * 2.5 + (volumeBiogas - 500) * 4.8;
  } else {
    bonusBruto = 500 * 2.5 + 700 * 4.8 + (volumeBiogas - 1200) * 7.2;
  }

  // 4. Verificação de "Produtor Ouro Sustentável" (volume > 1800 OU bônus > 10000.00)[cite: 4]
  bonusFinal = bonusBruto;
  let produtorOuro = false;

  if (volumeBiogas > 1800 || bonusBruto > 10000.0) {
    produtorOuro = true;
    bonusFinal = bonusBruto * 1.3; // Bonificação extra de 30%[cite: 4]
    contSeloOuro++;
    somaBiogasSeloOuro += volumeBiogas;
  }

  somaBonusFinal += bonusFinal;

  // Menor bônus final calculado (desconsiderando zeros)[cite: 4]
  if (bonusFinal < menorBonusFinal) {
    menorBonusFinal = bonusFinal;
  }

  // Contagem da faixa básica (até 500 m³)[cite: 4]
  if (volumeBiogas <= 500) {
    contFaixaBasica++;
  }

  contTotal++;

  // 5. Continuar ou Não (até digitar "n")[cite: 4]
  do {
    let respPrompt = prompt("Digite 's' para continuar e 'n' para parar:");
    resposta = respPrompt !== null ? respPrompt.toLowerCase().trim() : "";
    if (resposta !== "s" && resposta !== "n") {
      console.log("Digite apenas 's' ou 'n'.");
    }
  } while (resposta !== "s" && resposta !== "n");
} while (resposta === "s");

// Estatísticas Finais[cite: 4]
let mediaBonusGeral = contTotal > 0 ? somaBonusFinal / contTotal : 0;
let mediaBiogasSeloOuro =
  contSeloOuro > 0 ? somaBiogasSeloOuro / contSeloOuro : 0;
let percFaixaBasica = contTotal > 0 ? (contFaixaBasica / contTotal) * 100 : 0;

// Saída de Dados[cite: 4]
console.log(`--- RELATÓRIO DE PRODUÇÃO DE BIOGÁS ---
Maior volume de biogás inserido: ${maiorVolume} m³[cite: 4]
Menor bônus final calculado: R$ ${menorBonusFinal.toFixed(2)}[cite: 4]
Média geral dos bônus pagos aos produtores: R$ ${mediaBonusGeral.toFixed(2)}[cite: 4]
Média de biogás produzida pelas propriedades "Selo Ouro": ${mediaBiogasSeloOuro.toFixed(2)} m³[cite: 4]
Percentual de propriedades na faixa básica (até 500 m³): ${percFaixaBasica.toFixed(2)}%[cite: 4]`);
