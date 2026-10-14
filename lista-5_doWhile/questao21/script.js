let totalSetores = 0;
let somaCustos = 0;
let contAte8t = 0;
let contContingencia = 0;

// Inicialização dos extremos
let maiorPeso = -Infinity; // Começa com menor valor possível para achar o maior
let menorCusto = Infinity; // Começa com maior valor possível para achar o menor

let continuar = "s";

do {
  console.log(`\n--- Cadastro do Setor ${totalSetores + 1} ---`);

  // 1. VALIDAÇÃO E ENTRADA DO NOME DO SETOR
  let nomeSetor = "";
  do {
    nomeSetor = prompt("Informe o nome do setor: ");

    // Verifica se não é string ou se está vazio após remover espaços
    if (typeof nomeSetor !== "string" || nomeSetor.trim() === "") {
      console.log("Erro: O nome do setor nao pode ser vazio.");
    }
  } while (typeof nomeSetor !== "string" || nomeSetor.trim() === "");

  // 2. VALIDAÇÃO E ENTRADA DO PESO DO REFUGO
  let peso = 0;
  do {
    peso = +prompt("Informe o peso do refugo em toneladas (0 a 100): ");

    if (isNaN(peso) || peso <= 0 || peso >= 100) {
      console.log("Erro: O peso deve ser positivo e inferior a 100 toneladas.");
    }
  } while (isNaN(peso) || peso <= 0 || peso >= 100);

  // 3. CÁLCULO DO CUSTO BASE POR FAIXAS PROGRESSIVAS
  let custoBase = 0;

  if (peso <= 8) {
    // Faixa 1: Até 8t (R$ 120,00 / t)
    custoBase = peso * 120;
    contAte8t++; // Incrementa contador da faixa inicial
  } else if (peso <= 20) {
    // Faixa 2: Acima de 8t até 20t (8t a R$120 + excedente a R$250)
    custoBase = 8 * 120 + (peso - 8) * 250;
  } else {
    // Faixa 3: Acima de 20t (8t a R$120 + 12t a R$250 + excedente a R$450)
    custoBase = 8 * 120 + 12 * 250 + (peso - 20) * 450;
  }

  // 4. VERIFICAÇÃO E APLICAÇÃO DA TAXA DE CONTINGÊNCIA
  let custoFinal = custoBase;
  let sofreuContingencia = false;

  if (peso > 25 || custoBase > 10000) {
    custoFinal = custoBase * 1.25;
    sofreuContingencia = true;
    contContingencia++;
  }

  // 5. ATUALIZAÇÃO DOS ACUMULADORES E ESTATÍSTICAS
  totalSetores++;
  somaCustos += custoFinal;

  if (peso > maiorPeso) {
    maiorPeso = peso;
  }

  if (custoFinal < menorCusto) {
    menorCusto = custoFinal;
  }

  // 6. EXIBIÇÃO DO RESUMO DO SETOR ATUAL
  console.log(
    `Custo de destinacao do setor ${nomeSetor.trim()}: R$ ${custoFinal.toFixed(2)}`,
  );

  if (sofreuContingencia) {
    console.log("Taxa de contingencia de 25% aplicada.");
  }

  continuar = prompt("Deseja cadastrar outro setor? (s/n): ").toLowerCase();
} while (continuar !== "n");

if (totalSetores > 0) {
  let mediaFinanceira = somaCustos / totalSetores;
  let pctAte8t = (contAte8t / totalSetores) * 100;
  let pctContingencia = (contContingencia / totalSetores) * 100;

  // Exibição dos resultados finais
  console.log(`Total de setores processados: ${totalSetores}`);
  console.log(`Maior peso de refugo inserido: ${maiorPeso.toFixed(2)} t`);
  console.log(
    `Menor custo de destinacao calculated: R$ ${menorCusto.toFixed(2)}`,
  );
  console.log(
    `Media financeira de destinacao: R$ ${mediaFinanceira.toFixed(2)}`,
  );
  console.log(
    `Setores na faixa inicial estavel (ate 8t): ${pctAte8t.toFixed(2)}%`,
  );
  console.log(
    `Setores com taxa de contingencia: ${pctContingencia.toFixed(2)}%`,
  );
}
