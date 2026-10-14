let codigo = +prompt("Digite o código da bebida: '1', '2' ou '3'");
switch (codigo) {
  case 1:
    alert("Este é o código da água!");
    break;
  case 2:
    alert("Este é o código do refriegerante!");
    break;
  case 3:
    alert("Este é o código do suco!");
    break;
  default:
    alert("Informe um código válido!");
}
