let conversao = +prompt("Digite 1 de km para m, e 2 de m para km");
let distancia;
let valorConvertido;
switch (conversao) {
  case 1:
    distancia = +prompt("Digite a distância em km:");
    valorConvertido = distancia * 1000;
    alert("O valor convertido foi:" + valorConvertido);
    break;
  case 2:
    distancia = +prompt("Digite a distância em m:");
    valorConvertido = distancia / 1000;
    alert("O valor convertido foi: " + valorConvertido);
    break;
  default:
    alert("Opção de conversão inválida!");
}
