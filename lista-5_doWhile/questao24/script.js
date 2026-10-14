let prefixoContenedor;
let horasArmazenagem;
let custoBase;
let custoFinal;
let contTotal = 0;
let contFaixaIntermediaria = 0;
let contSobretaxa = 0;
let somaHoras = 0;
let somaCustoFinal = 0;
let menorHoras = Infinity;
let maiorCustoFinal = -Infinity;
let resposta = "n";

do {
  // 1. Validação do Prefixo do Contêiner (exatamente 11 caracteres)
  do {
    prefixoContenedor = prompt("Digite o prefixo de identificação do contêiner (11 caracteres):");
    let codigoCorrecao = prefixoContenedor !== null ? prefixoContenedor.trim() : "";
    if (codigoCorrecao.length !== 11) {
      console.log("O prefixo de identificação do contêiner deve possuir obrigatoriamente 11 caracteres!");
    }
  } while (prefixoContenedor === null || prefixoContenedor.trim().length !== 11);

  // 2. Leitura e Validação do Tempo em Horas (positivo e inferior a 500 horas)
  do {
    horasArmazenagem = +prompt("Digite o número de horas de armazenagem (maior que 0 e inferior a 500):");
    if (horasArmazenagem <= 0 || horasArmazenagem >= 500 || isNaN(horasArmazenagem)) {
      console.log("O número de horas deve ser positivo e inferior a 500 horas!");
    }
  } while (horasArmazenagem <= 0 || horasArmazenagem >= 500 || isNaN(horasArmazenagem));

  somaHoras += horasArmazenagem;

  // Menor tempo em horas digitado
  if (horasArmazenagem < menorHoras) {
    menorHoras = horasArmazenagem;
  }

  // 3. Cálculo Progressivo do Custo Operacional Base
  if (horasArmazenagem <= 48) {
    custoBase = horasArmazenagem * 15.00;
  } else if (horasArmazenagem <= 120) {
    custoBase = (48 * 15.00) + ((horasArmazenagem - 48) * 35.00);
  } else {
    custoBase = (48 * 15.00) + (72 * 35.00) + ((horasArmazenagem - 120) * 70.00);
  }

  // 4. Verificação de Sobretaxa Portuária (horas > 168 OU custo base > 8000.00)
  custoFinal = custoBase;
  let sofreuSobretaxa = false;

  if (horasArmazenagem > 168 || custoBase > 8000.00) {
    sofreuSobretaxa = true;
    custoFinal = custoBase * 1.50; // Incide sobretaxa portuária de 50%
    contSobretaxa++;
  }

  somaCustoFinal += custoFinal;

  // Maior Custo Final de Armazenagem Calculado
  if (custoFinal > maiorCustoFinal) {
    maiorCustoFinal = custoFinal;
  }

  // Contagem da Faixa Intermediária (48h a 120h)
  if (horasArmazenagem > 48 && horasArmazenagem <= 120) {
    contFaixaIntermediaria++;
  }

  contTotal++;

  // 5. Continuar ou Não
  do {
    let respPrompt = prompt("Digite 's' para continuar e 'n' para parar:");
    resposta = respPrompt !== null ? respPrompt.toLowerCase().trim() : "";
    if (resposta !== "s" && resposta !== "n") {
      console.log("Digite apenas 's' ou 'n'.");
    }
  } while (resposta !== "s" && resposta !== "n");

} while (resposta === "s");

// Estatísticas e Percentuais Finais
let mediaHoras = contTotal > 0 ? somaHoras / contTotal : 0;
let mediaFinanceiraGeral = contTotal > 0 ? somaCustoFinal / contTotal : 0;
let percFaixaIntermediaria = contTotal > 0 ? (contFaixaIntermediaria / contTotal) * 100 : 0;
let percSobretaxa = contTotal > 0 ? (contSobretaxa / contTotal) * 100 : 0;

// Saída de Dados
console.log(`--- RELATÓRIO DO TERMINAL DE CONTÊINERES ---
Menor tempo em horas digitado: ${menorHoras}h[cite: 4]
Maior custo final de armazenagem: R$ ${maiorCustoFinal.toFixed(2)}[cite: 4]
Média de horas geral de armazenamento: ${mediaHoras.toFixed(2)}h[cite: 4]
Média financeira geral de destinação/armazenagem: R$ ${mediaFinanceiraGeral.toFixed(2)}
Percentual de contêineres na faixa intermediária (48h a 120h): ${percFaixaIntermediaria.toFixed(2)}%[cite: 4]
Percentual de unidades que sofreram a sobretaxa portuária: ${percSobretaxa.toFixed(2)}%[cite: 4]`);