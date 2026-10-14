let usuario = "henrique";
let senha = "1801";
let tentativas = 3;
let acesso;
let respostasUsuario = prompt(
  "Digite seu número de usuário.",
).toLocaleLowerCase();
while (usuario !== respostasUsuario) {
  respostasUsuario = prompt("Usuário inválido! Digite novamento");
}
let respostaSenha = prompt("Digite a sua senha.");
while (respostaSenha !== senha && tentativas > 1) {
  tentativas = tentativas - 1;
  respostaSenha = prompt(
    "Senha inválida, você possui mais " + tentativas + " tentativas!",
  );
}
if (respostaSenha === senha) {
  acesso = "Permitido!";
} else {
  acesso = "Negado!";
}
alert("O acesso foi: " + acesso);
