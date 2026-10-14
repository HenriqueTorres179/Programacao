let nomeOperador;
let comprimentoTecido;
let prejuizoDireto;
let prejuizoTotal;
let contTotal = 0;
let contFaixaIntermediaria = 0;
let contPrejuizoEstrutural = 0;
let somaPrejuizoTotal = 0;
let maiorComprimento = -Infinity;
let maiorPrejuizoTotal = -Infinity;
let resposta = "n";

do {
  // 1. Validação do Nome do Operador (não pode ser vazio)[cite: 4]
  do {
    nomeOperador = prompt("Digite o nome do operador responsável:");
    let nomeCorrecao = nomeOperador !== null ? nomeOperador.trim() : "";
    if (nomeCorrecao === "") {
      console.log("O nome do operador responsável não pode ser vazio!");
    }
  } while (nomeOperador === null || nomeOperador.trim() === "");

  // 2. Leitura e Validação do Comprimento em metros (maior que 0 e inferior a 600)[cite: 4]
  do {
    comprimentoTecido = +prompt("Digite o comprimento do tecido em metros (maior que 0 e inferior a 600):");
    if (comprimentoTecido <= 0 || comprimentoTecido >= 600 || isNaN(comprimentoTecido)) {
      console.log("O comprimento do tecido em metros deve ser maior que zero e inferior a 600 metros por lote!");
    }
  } while (comprimentoTecido <= 0 || comprimentoTecido >= 600 || isNaN(comprimentoTecido));

  // Maior comprimento de tecido informado[cite: 4]
  if (comprimentoTecido > maiorComprimento) {
    maiorComprimento = comprimentoTecido;
  }

  // 3. Cálculo Progressivo do Prejuízo Direto[cite: 4]
  if (comprimentoTecido <= 50) {
    prejuizoDireto = comprimentoTecido * 18.00;
  } else if (comprimentoTecido <= 150) {
    prejuizoDireto = (50 * 18.00) + ((comprimentoTecido - 50) * 32.00);
  } else {
    prejuizoDireto = (50 * 18.00) + (100 * 32.00) + ((comprimentoTecido - 150) * 55.00);
  }

  // 4. Verificação de "Prejuízo Estrutural Técnico" (perda > 200m OU prejuízo direto > 7500.00)[cite: 4]
  prejuizoTotal = prejuizoDireto;
  let emPrejuizoEstrutural = false;

  if (comprimentoTecido > 200 || prejuizoDireto > 7500.00) {
    emPrejuizoEstrutural = true;
    prejuizoTotal = prejuizoDireto * 1.45; // Adiciona multa interna de 45%[cite: 4]
    contPrejuizoEstrutural++;
  }

  somaPrejuizoTotal += prejuizoTotal;

  // Maior prejuízo total calculado no sistema[cite: 4]
  if (prejuizoTotal > maiorPrejuizoTotal) {
    maiorPrejuizoTotal = prejuizoTotal;
  }

  // Contagem da faixa intermediária (50m a 150m)[cite: 4]
  if (comprimentoTecido > 50 && comprimentoTecido <= 150) {
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

// Estatísticas e Percentuais Finais[cite: 4]
let mediaPrejuizoGeral = contTotal > 0 ? somaPrejuizoTotal / contTotal : 0;
let percFaixaIntermediaria = contTotal > 0 ? (contFaixaIntermediaria / contTotal) * 100 : 0;
let percPrejuizoEstrutural = contTotal > 0 ? (contPrejuizoEstrutural / contTotal) * 100 : 0;

// Saída de Dados[cite: 4]
console.log(`--- RELATÓRIO DE CONTROLO DE QUALIDADE TÊXTIL ---
Maior comprimento de tecido informado: ${maiorComprimento}m[cite: 4]
Maior prejuízo total calculado no sistema: R$ ${maiorPrejuizoTotal.toFixed(2)}[cite: 4]
Média financeira geral do prejuízo por lote: R$ ${mediaPrejuizoGeral.toFixed(2)}[cite: 4]
Percentual de lotes retidos na faixa intermediária (50m a 150m): ${percFaixaIntermediaria.toFixed(2)}%[cite: 4]
Percentual de ocorrências catalogadas como "Prejuízo Estrutural Técnico": ${percPrejuizoEstrutural.toFixed(2)}%[cite: 4]`);