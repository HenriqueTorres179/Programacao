let desconto;
let nome;
let materialPerdido;
let bonus = 1200;
let bonusFinal = 0;
let continuar;
let media;
let perc;

// Questão 3 - Manipulação de Variáveis Somadoras e Contadoras
let bonusTotal = 0;
let eficiente = 0;
let qntOperador = 0;
do {
  // Questão 1 - Controle de Entrada da Variável de Desperdício
  do {
    nome = prompt("Digite o nome do operador");

    materialPerdido = +prompt(
      "Digite a quantidade de material perdido (em kg)",
    );

    if (
      isNaN(materialPerdido) ||
      materialPerdido < 0 ||
      materialPerdido >= 60
    ) {
      alert("Quantidade inválida!");
    }
  } while (
    isNaN(materialPerdido) ||
    materialPerdido < 0 ||
    materialPerdido >= 60
  );

  // Questão 2 - Lógica de Cálculo com Penalidades e Dedução
  if (materialPerdido <= 10) {
    desconto = materialPerdido * 15;
    eficiente++;
  } else if (materialPerdido <= 25) {
    desconto = (materialPerdido - 10) * 25 + 10 * 15;
  } else {
    desconto = (materialPerdido - 25) * 40 + 200 + 15 * 25 + 10 * 15;
  }

  bonusFinal = bonus - desconto;

  qntOperador++;

  bonusTotal += bonusFinal;

  // Questão 4 - Controle de Saída e Encerramento do Laço Principal
  alert("Operador: " + nome + "\nBônus líquido: R$ " + bonusFinal.toFixed(2));

  do {
    continuar = prompt("Deseja continuar? Digite s ou n").toLowerCase();

    if (continuar !== "s" && continuar !== "n") {
      alert("Opção inválida! Digite apenas 's' ou 'n'.");
    }
  } while (continuar !== "s" && continuar !== "n");
} while (continuar === "s");

// Questão 5 - Apresentação dos Resultados e Estatísticas Finais
media = bonusTotal / qntOperador;
perc = (eficiente / qntOperador) * 100;

alert(
  "O bônus líquido do último operador foi de: R$ " +
    bonusFinal.toFixed(2) +
    "\nA média do bônus líquido dos operadores foi de: R$ " +
    media.toFixed(2) +
    "\nA porcentagem de operadores na faixa eficiente é de: " +
    perc.toFixed(2) +
    "%",
);
/* Auditoria de Eficiência Logística (Desconto Regressivo por
Desperdício)
Contexto: Uma empresa de e-commerce audita o processo de empacotamento de seus
centros de distribuição. Cada operador recebe uma verba de bonificação logística fixa de
R$ 1.200,00, porém sofre descontos baseados na quantidade de material desperdiçado
no mês. Quanto menos desperdício, menor é a taxa cobrada por quilo perdido.
Enunciado da Prova
Elabore um programa em Javascript que utilize obrigatoriamente a estrutura de repetição
do while para processar a auditoria de vários operadores logísticos. O programa deve ler
o nome do operador e a quantidade de material desperdiçado em quilos (kg).
Todos os operadores iniciam com uma bonificação bruta de R$ 1.200,00. O cálculo do
desconto total sobre a bonificação depende de uma taxa de penalidade regressiva por
faixas de desperdício:
• Faixa Eficiente (Desperdício até 10 kg): O operador perde R$ 15,00 por cada quilo
desperdiçado.
• Faixa Alerta (Desperdício acima de 10 kg até 25 kg): O operador perde R$ 25,00 por
cada quilo desperdiçado.
• Faixa Crítica (Desperdício acima de 25 kg): O operador perde R$ 40,00 por cada quilo
desperdiçado, além de sofrer uma penalidade extra fixa de R$ 200,00 deduzida no saldo
final.
O programa deve calcular o bônus líquido final (R$ 1.200,00 menos o desconto total
calculado). No final do processamento de cada operador, apresente o bônus líquido
correspondente.
Questões e Critérios de Avaliação (5 Regras Obrigatórias)
• Questão 1 (Peso: 1.0) — Controle de Entrada da Variável de Desperdício:
Implemente um laço de repetição do while interno para garantir que a quantidade de
desperdício (em kg) seja um valor positivo ou igual a zero, e estritamente menor que 60
kg. Caso o usuário digite um valor inválido, exiba a mensagem de erro "Quantidade
inválida!" e obrigue a redigitação do dado.
• Questão 2 (Peso: 3.5) — Lógica de Cálculo com Penalidades e Dedução:
Desenvolva a estrutura condicional encadeada (if / else if / else) para realizar o
cálculo exato do desconto total baseado nas três faixas de desperdício. Certifique-se de
aplicar a taxa correta por quilo e de incluir a penalidade extra fixa de R$ 200,00
exclusivamente na Faixa Crítica.
• Questão 3 (Peso: 3.0) — Manipulação de Variáveis Somadoras e Contadoras:
Declare e manipule corretamente as variáveis do tipo somadora (para acumular o bônus
líquido final de todos os operadores) e do tipo contadora (para contar a quantidade total
de operadores auditados e a quantidade específica de operadores que conseguiram se
manter na Faixa Eficiente).
• Questão 4 (Peso: 1.5) — Controle de Saída e Encerramento do Laço Principal:
Gerencie a repetição do laço principal através de um do while. Ao término do registro de
cada funcionário, pergunte ao usuário: "Deseja continuar? Digite s ou n". Utilize um
do while de validação interno para aceitar apenas os caracteres "s" ou "n", exibindo um
alerta de erro para qualquer resposta diferente.
• Questão 5 (Peso: 1.0) — Apresentação dos Resultados e Estatísticas Finais:
Ao encerrar o laço principal, calcule e apresente na tela (fora de qualquer estrutura de
repetição):
• O bônus líquido do último operador processado.
• A média do bônus líquido de todos os operadores que foram auditados.
• O percentual de operadores que se mantiveram na Faixa Eficiente (desperdício de até
10 kg). */
