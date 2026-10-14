let nivelRio;
let frh;
let codigoEstacao;
let contTotal = 0;
let contNivel = 0;
let contEstadoAlerta = 0;
let contFaixaCritica = 0;
let somaEstadoAlerta = 0;
let maiorNivel = -Infinity;
let menorFrh = Infinity;
let somaNivel = 0;
let somaFrh = 0;
let resposta = "n";

do {
  // Leitura do Nível do Rio (entre 0.0m e 15.0m)
  do {
    nivelRio = +prompt("Qual o nível de elevação do Rio (m)?");
    if (nivelRio < 0 || nivelRio > 15 || isNaN(nivelRio)) {
      console.log("Digite um valor entre 0.0 e 15.0 metros!");
    }
  } while (nivelRio < 0 || nivelRio > 15 || isNaN(nivelRio));

  contNivel++;
  somaNivel += nivelRio;

  // Maior Nível
  if (nivelRio > maiorNivel) {
    maiorNivel = nivelRio;
  }

  // Validação do Código da Estação (exatamente 4 caracteres)
  do {
    codigoEstacao = prompt(
      "Digite o código identificador da estação (4 caracteres):",
    );
    let codigoCorrecao = codigoEstacao !== null ? codigoEstacao.trim() : "";
    if (codigoCorrecao.length !== 4) {
      console.log(
        "Digite um código identificador de estação com exatamente 4 caracteres!",
      );
    }
  } while (codigoEstacao === null || codigoEstacao.trim().length !== 4);

  // Cálculo FRH base
  if (nivelRio <= 3.5) {
    frh = nivelRio * 1.2;
  } else if (nivelRio <= 6.0) {
    frh = nivelRio * 2.5;
  } else {
    frh = nivelRio * 4.8;
  }

  // Verifica Estado de Alerta Máximo e aplica o acréscimo de 40%
  let frhFinal = frh;
  let emAlertaMaximo = false;

  if (nivelRio > 7.5 || frh > 30) {
    emAlertaMaximo = true;
    frhFinal = frh * 1.4;
    contEstadoAlerta++;
    somaEstadoAlerta += frhFinal;
  }

  somaFrh += frhFinal;

  // Menor FRH final calculado
  if (frhFinal < menorFrh) {
    menorFrh = frhFinal;
  }

  // Conta faixa crítica (acima de 6.0m)
  if (nivelRio > 6.0) {
    contFaixaCritica++;
  }

  contTotal++;

  // Continuar ou Não
  do {
    let respPrompt = prompt("Digite 's' para continuar e 'n' para parar:");
    resposta = respPrompt !== null ? respPrompt.toLowerCase().trim() : "";
    if (resposta !== "s" && resposta !== "n") {
      console.log("Digite apenas 's' ou 'n'.");
    }
  } while (resposta !== "s" && resposta !== "n");
} while (resposta === "s");

// Estatísticas e Médias
let mediaNivel = contNivel > 0 ? somaNivel / contNivel : 0;
let mediaFrh = contTotal > 0 ? somaFrh / contTotal : 0;
let mediaFrhEstadoALerta =
  contEstadoAlerta > 0 ? somaEstadoAlerta / contEstadoAlerta : 0;
let percFaixaCritica = contTotal > 0 ? (contFaixaCritica / contTotal) * 100 : 0;

// Saída final
console.log(`--- RELATÓRIO DO MONITORAMENTO ---
Maior nível de rio informado: ${maiorNivel}m
Menor FRH final calculado: ${menorFrh.toFixed(2)}
A média geral dos níveis detectados foi de: ${mediaNivel.toFixed(2)}m
A média do FRH detectado foi de: ${mediaFrh.toFixed(2)}
A média do FRH específico do estado de alerta máximo foi de: ${mediaFrhEstadoALerta.toFixed(2)}
O percentual na faixa crítica (acima de 6.0m) foi de: ${percFaixaCritica.toFixed(2)}%`);
