let maiorLote = -Infinity;
let totalUnidades = 0;
let contMaiorQue1000 = 0; // 1. Inicializado com 0 para não dar NaN depois

for (let i = 0; i < 10; i++) {
  let qntDoLote = parseInt(
    prompt(`Digite a quantidade de unidades deste lote (lote: ${i}):`),
  );

  while (qntDoLote < 0 || isNaN(qntDoLote)) {
    alert(`Digite apenas números inteiros válidos e maiores ou iguais a 0!`);
    qntDoLote = parseInt(
      prompt(`Digite a quantidade de unidades deste lote (lote: ${i}):`),
    );
  }

  totalUnidades += qntDoLote;

  if (qntDoLote >= 1000) {
    contMaiorQue1000++;
  }

  if (qntDoLote > maiorLote) {
    maiorLote = qntDoLote;
  }
}

alert(
  `A produção total foi de: ${totalUnidades}.\n` +
    `A quantidade de lotes que atingiram 1000 ou mais unidades foi de: ${contMaiorQue1000}.\n` +
    `A quantidade produzida pelo maior lote foi de: ${maiorLote}`,
);
