// 1. Criamos a lista (Array) com os pesos das 5 caixas para testar
const caixas = [25, 32, 10, 55, 110];

// Variável para acumular a soma de todas as taxas
let taxaTotal = 0;

console.log("=== PROCESSAMENTO DE CAIXAS ===");

// 2. Estrutura do for tradicional
for (let i = 0; i < caixas.length; i++) {
  const peso = caixas[i]; // Pega o peso da caixa atual pelo índice 'i'

  // 3. Controle de entrada (validação de erro)
  // O peso deve ser positivo (maior que 0) e inferior a 100 kg
  if (peso <= 0 || peso >= 100) {
    console.log(
      `Caixa no índice ${i}: ERRO - Peso (${peso}kg) é inválido! Deve ser entre 0 e 100kg.`,
    );
    continue; // 'continue' pula o restante do código desta volta e vai para a próxima caixa
  }

  // 4. Regra de negócio (verificação de excesso)
  if (peso > 30) {
    const excesso = peso - 30; // Calcula quantos quilos passaram do limite
    const multa = excesso * 5; // R$ 5,00 por quilo excedente
    taxaTotal += multa; // Soma no valor total acumulado

    console.log(
      `Caixa no índice ${i}: ${peso}kg | Excesso: ${excesso}kg | Taxa: R$ ${multa},00`,
    );
  } else {
    // Caso esteja dentro do limite de 30kg
    console.log(
      `Caixa no índice ${i}: ${peso}kg | Dentro do limite. Taxa: R$ 0,00`,
    );
  }
}

// 5. Exibição do resultado final acumulado
console.log("===============================");
console.log(`Valor TOTAL de taxas acumuladas: R$ ${taxaTotal},00`);
