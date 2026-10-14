let transporte = prompt(
  "Qual o meio de transporte? M=Moto. C=Carro e B=Bicicleta",
).toUpperCase();
switch (transporte) {
  case "M":
    alert("Moto");
    break;
  case "C":
    alert("Carro");
    break;
  case "B":
    alert("Bicicleta");
    break;
  default:
    alert("Código de transporte inválido!");
}
