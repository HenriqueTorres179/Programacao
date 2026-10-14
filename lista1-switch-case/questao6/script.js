let codigo = +prompt("Digite o código do produto: '100', '200', ou '300'");
let preco;
switch (codigo) {
  case 100:
    preco = 50;
    alert("O produto é: Mouse" + "\n E o preço é: " + preco.toFixed(2));
    break;
  case 200:
    preco = 80;
    alert("O produto é: Teclado" + "\n E o preço é: " + preco.toFixed(2));
    break;
  case 300:
    preco = 900;
    alert("O produto é: Monitor" + "\n E o preço é: " + preco.toFixed(2));
    break;
  default:
    alert("Digite um código válido!");
}
