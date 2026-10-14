let periodo = prompt("Digite o período: 'M', 'T' e 'N'").toUpperCase();
switch (periodo) {
  case "M":
    alert("Bom dia!");
    break;
  case "T":
    alert("Boa tarde!");
    break;
  case "N":
    alert("Boa noite!");
    break;
  default:
    alert("Digite um período válido!");
}
