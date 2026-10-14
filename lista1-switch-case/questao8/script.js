let codigo = +prompt("Digite o código do curso:");

switch (codigo) {
  case 1:
    alert("O seu curso é: Informática");
    break;
  case 2:
    alert("O seu curso é: Administração");
    break;
  case 3:
    alert("O seu curso é: Redes de Computadores");
    break;
  default:
    alert("Código de Curso inválido!");
}
