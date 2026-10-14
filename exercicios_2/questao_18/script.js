let idade = parseInt(
  prompt("Digite a idade do motorista em anos (número inteiro): "),
);
let historicoAcidentes = parseInt(
  prompt("Digite o número de acidentes nos últimos 3 anos: "),
);
let itensSeguranca = prompt(
  "O carro possui airbag e ABS?(sim ou não)",
).toLocaleLowerCase();
let risco;
let valor;

if (
  (idade >= 25 && historicoAcidentes <= 2 && historicoAcidentes > 0) ||
  (idade < 25 && historicoAcidentes === 0)
) {
  risco = "Perfil de Risco Moderado.";
  valor = 300;
  if (itensSeguranca === "sim") {
    valor = valor - 30;
  }
} else if (idade >= 25 && historicoAcidentes === 0) {
  risco = "Perfil de Risco Baixo.";
  valor = 180;
} else if (idade < 25 || historicoAcidentes > 2) {
  risco = "Perfil de Risco Alto.";
  valor = 450;
  if (itensSeguranca === "não") {
    valor = valor + 100;
  }
}
alert(risco + "\n O valor a ser pago mensalmente é: R$" + valor.toFixed(2));
