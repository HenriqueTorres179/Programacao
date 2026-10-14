let regiao = prompt("Digite a sigla do estado:").toUpperCase();
let frete;
switch (regiao) {
  case "S":
    frete = 20;
    alert("A região é Sul, e a o frete é: R$" + frete);
    break;
  case "N":
    frete = 45;
    alert("A região é Norte, e o frete é: R$" + frete);
    break;
  case "SE":
    frete = 25;
    alert("A regiao É Sudeste, e o frete é: R$" + frete);
    break;
  case "CO":
    frete = 35;
    alert("A região é Centro-Oeste, e o frete é: R$" + frete);
    break;
  case "NE":
    frete = 40;
    alert("A região é Nordeste, e o frete é: R$" + frete);
    break;
  default:
    alert("Região de Entrega Inválida!");
}
