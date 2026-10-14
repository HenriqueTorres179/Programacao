let codigoCamara;
let consumoKwh;
let tarifaBruta;
let tarifaFinal;
let contTotal = 0;
let contAltaDemanda = 0;
let contFaixaEconomica = 0;
let somaTarifa = 0;
let somaConsumoAltaDemanda = 0;
let maiorConsumo = -Infinity;
let maiorTarifa = -Infinity;

do {
  // 1. Validação do Código da Câmara (não pode ser vazio e para se for "FIM")[cite: 3]
  do {
    codigoCamara = prompt("Digite o código identificador da câmara (ou 'FIM' para encerrar):");
    let codigoCorrecao = codigoCamara !== null ? codigoCamara.trim() : "";
    if (codigoCorrecao === "") {
      console.log("O código da câmara não pode ser vazio!");
    }
  } while (codigoCamara === null || codigoCamara.trim() === "");

  // Padroniza para maiúsculo para aceitar "fim", "Fim", "FIM"
  let codigoLimpo = codigoCamara.trim().toUpperCase();

  if (codigoLimpo === "FIM") {
    break; // Força a parada conforme o enunciado[cite: 3]
  }

  // 2. Leitura e Validação do Consumo em kWh (estritamente positivo e menor que 12.000)[cite: 3]
  do {
    consumoKwh = +prompt("Digite o consumo de energia em kWh (maior que 0 e menor que 12000):");
    if (consumoKwh <= 0 || consumoKwh >= 12000 || isNaN(consumoKwh)) {
      console.log("Digite um valor válido estritamente positivo e menor que 12.000 kWh!");
    }
  } while (consumoKwh <= 0 || consumoKwh >= 12000 || isNaN(consumoKwh));

  // Maior Consumo em kWh[cite: 3]
  if (consumoKwh > maiorConsumo) {
    maiorConsumo = consumoKwh;
  }

  // 3. Cálculo Progressivo da Tarifa Bruta[cite: 3]
  if (consumoKwh <= 1500) {
    tarifaBruta = consumoKwh * 0.60;
  } else if (consumoKwh <= 4000) {
    // Progressivo: 1500 a 0,60 + o excedente a 0,95
    tarifaBruta = (1500 * 0.60) + ((consumoKwh - 1500) * 0.95);
  } else {
    // Progressivo: 1500 a 0,60 + 2500 (de 1500 a 4000) a 0,95 + o excedente acima de 4000 a 1,40
    tarifaBruta = (1500 * 0.60) + (2500 * 0.95) + ((consumoKwh - 4000) * 1.40);
  }

  // 4. Verificação de "Unidades de Alta Demanda" (consumo > 5.500 OU tarifa > 6.000)[cite: 3]
  tarifaFinal = tarifaBruta;
  let emAltaDemanda = false;

  if (consumoKwh > 5500 || tarifaBruta > 6000.00) {
    emAltaDemanda = true;
    tarifaFinal = tarifaBruta * 1.35; // Acréscimo punitivo de 35%[cite: 3]
    contAltaDemanda++;
    somaConsumoAltaDemanda += consumoKwh;
  }

  somaTarifa += tarifaFinal;

  // Maior Tarifa Final Calculada[cite: 3]
  if (tarifaFinal > maiorTarifa) {
    maiorTarifa = tarifaFinal;
  }

  // Faixa Econômica Inicial (até 1.500 kWh)[cite: 3]
  if (consumoKwh <= 1500) {
    contFaixaEconomica++;
  }

  contTotal++;

} while (true); // Loop infinito controlado pelo "FIM" interno com break[cite: 3]

// Estatísticas Finais[cite: 3]
let mediaTarifa = contTotal > 0 ? somaTarifa / contTotal : 0;
let mediaConsumoAltaDemanda = contAltaDemanda > 0 ? somaConsumoAltaDemanda / contAltaDemanda : 0;
let percFaixaEconomica = contTotal > 0 ? (contFaixaEconomica / contTotal) * 100 : 0;

// Saída de Dados[cite: 3]
console.log(`--- RELATÓRIO DE AUDITORIA ENERGÉTICA ---
Maior consumo em kWh digitado: ${maiorConsumo} kWh[cite: 3]
Maior tarifa final calculada: R$ ${maiorTarifa.toFixed(2)}[cite: 3]
Média geral das tarifas calculadas: R$ ${mediaTarifa.toFixed(2)}[cite: 3]
Média de consumo das "Unidades de Alta Demanda": ${mediaConsumoAltaDemanda.toFixed(2)} kWh[cite: 3]
Percentual na faixa econômica inicial (até 1.500 kWh): ${percFaixaEconomica.toFixed(2)}%[cite: 3]`);