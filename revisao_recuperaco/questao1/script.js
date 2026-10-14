//Entrada de Dados
let area = parseFloat(prompt("Digite a área total (m²) irriigada:"));
let agua = parseFloat(
  prompt("Digite a quantidade de água utilizada (em litros):"),
);
let setor = parseFloat(prompt("Digite a área (m²) desse setor"));
//Processamento de Dados
let aguaMetro = agua / area;
let aguaSetor = aguaMetro * setor;
let aguaDiferenca = aguaSetor - 500;
//Saída de Dados
alert("O consumo de água (em litros) por m² é de:" + aguaMetro.toFixed(2));
alert(
  "A quantidade de água utilizada apenas nesse setor (em litros) é de: " +
    aguaSetor.toFixed(2),
);
alert(
  "A diferença entre a quantidade de água utilizada nesse setor e 500 é de: " +
    aguaDiferenca.toFixed(2),
);
