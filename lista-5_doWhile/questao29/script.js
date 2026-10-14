let variedadeMaca;
let pesoLote;
let custoBase;
let custoFinal;
let contTotal = 0;
let contFaixaIntermediaria = 0;
let contAtmosferaUrgencia = 0;
let somaPeso = 0;
let somaCustoFinal = 0;
let menorPeso = Infinity;
let maiorCustoFinal = -Infinity;
let resposta = "n";

do {
  // 1. Validação da Variedade da Maçã (deve ser preenchida)[cite: 4]
  do {
    variedadeMaca = prompt("Digite a variedade da maçã (ex: Gala, Fuji):");
    let variedadeCorrecao = variedadeMaca !== null ? variedadeMaca.trim() : "";
    if (variedadeCorrecao === "") {
      console.log("A variedade da maçã deve ser preenchida!");
    }
  } while (variedadeMaca === null || variedadeMaca.trim() === "");

  // 2. Leitura e Validação do Peso em Toneladas (positivo e inferior a 250 toneladas)[cite: 4]
  do {
    pesoLote = +prompt("Digite o peso do lote em toneladas (maior que 0 e inferior a 250):");
    if (pesoLote <= 0 || pesoLote >= 250 || isNaN(pesoLote)) {
      console.log("O peso do lote em toneladas deve ser positivo e inferior a 250 toneladas por ciclo!");
    }
  } while (pesoLote <= 0 || pesoLote >= 250 || isNaN(pesoLote));

  somaPeso += pesoLote;

  // Menor peso de lote informado[cite: 4]
  if (pesoLote < menorPeso) {
    menorPeso = pesoLote;
  }

  // 3. Cálculo Progressivo do Custo de Climatização[cite: 4]
  if (pesoLote <= 20) {
    custoBase = pesoLote * 150.00;
  } else if (pesoLote <= 60) {
    custoBase = (20 * 150.00) + ((pesoLote - 20) * 280.00);
  } else {
    custoBase = (20 * 150.00) + (40 * 280.00) + ((pesoLote - 60) * 400.00);
  }

  // 4. Verificação de Atmosfera Controlada de Urgência (peso > 90 OU custo base > 25000.00)[cite: 4]
  custoFinal = custoBase;
  let emUrgencia = false;

  if (pesoLote > 90 || custoBase > 25000.00) {
    emUrgencia = true;
    custoFinal = custoBase * 1.50; // Acréscimo técnico de 50%[cite: 4]
    contAtmosferaUrgencia++;
  }

  somaCustoFinal += custoFinal;

  // Maior custo de climatização final calculado[cite: 4]
  if (custoFinal > maiorCustoFinal) {
    maiorCustoFinal = custoFinal;
  }

  // Contagem da faixa intermediária (20t a 60t)[cite: 4]
  if (pesoLote > 20 && pesoLote <= 60) {
    contFaixaIntermediaria++;
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
let mediaPesoGeral = contTotal > 0 ? somaPeso / contTotal : 0;
let percFaixaIntermediaria = contTotal > 0 ? (contFaixaIntermediaria / contTotal) * 100 : 0;
let percAtmosferaUrgencia = contTotal > 0 ? (contAtmosferaUrgencia / contTotal) * 100 : 0;

// Saída de Dados[cite: 4]
console.log(`--- RELATÓRIO DE PROCESSAMENTO DE MAÇÃ ---
Menor peso de lote informado: ${menorPeso}t[cite: 4]
Maior custo de climatização final calculado: R$ ${maiorCustoFinal.toFixed(2)}[cite: 4]
Média geral do peso dos lotes de maçã: ${mediaPesoGeral.toFixed(2)}t[cite: 4]
Percentual de lotes na faixa intermediária (20t a 60t): ${percFaixaIntermediaria.toFixed(2)}%[cite: 4]
Percentual de lotes que demandaram atmosfera controlada de urgência: ${percAtmosferaUrgencia.toFixed(2)}%[cite: 4]`);