let dia = parseInt(prompt("Digite um número de 1 a 7:"));

switch (dia) {
  case 1:
    alert("Hoje é: Domingo");
    break;
  case 2:
    alert("Hoje é: Segunda-Feira!");
    break;
  case 3:
    alert("Hoje é: Terça-Feira!");
    break;
  case 4:
    alert("Hoje é: Quarta-Feira");
    break;
  case 5:
    alert("Hoje é: Quinta-Feira!");
    break;
  case 6:
    alert("Hoje é: Sexta-Feira!");
    break;
  case 7:
    alert("Hoje é: Sábado!");
    break;
  default:
    alert(
      "Você não informou um número de 1 a 7, por favor, informe o número correto!",
    );
}
