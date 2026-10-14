let media1, media2, media3;
let entradaValida = false;

do {
  media1 = +prompt("Digite a média do primeiro trimestre (0 a 10):");
  media2 = +prompt("Digite a média do segundo trimestre (0 a 10):");
  media3 = +prompt("Digite a média do terceiro trimestre (0 a 10):");

  if (
    isNaN(media1) ||
    media1 < 0 ||
    media1 > 10 ||
    isNaN(media2) ||
    media2 < 0 ||
    media2 > 10 ||
    isNaN(media3) ||
    media3 < 0 ||
    media3 > 10
  ) {
    alert("Erro: Todas as médias devem ser números válidos entre 0 e 10!");
  } else {
    entradaValida = true;
  }
} while (!entradaValida);

// Cálculo da Média Anual
const mediaAnual = (media1 + media2 + media3) / 3;

// Definição do resultado
let resposta;
if (mediaAnual >= 6) {
  resposta = "Aprovação";
} else {
  resposta = "Reprovação";
}

alert(`Média Anual: ${mediaAnual.toFixed(2)}\nResultado: ${resposta}`);
