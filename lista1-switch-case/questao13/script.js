let procedencia = +prompt(
  "Digite 1=Norte. 2=Nordeste, 3=Centro-Oeste, 4=Sudeste e 5=Sul",
);
switch (procedencia) {
  case 1:
    alert("Norte");
    break;
  case 2:
    alert("Nordeste");
    break;
  case 3:
    alert("Centro-Oeste");
    break;
  case 4:
    alert("Sudeste");
    break;
  case 5:
    alert("Sul");
    break;
  default:
    alert("Código de origem inválido!");
}
