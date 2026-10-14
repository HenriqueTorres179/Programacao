let idade = +prompt("Digite sua idade: ");
while (isNaN(idade)) {
  idade = +prompt("Informe uma idade válida!");
}
let categoria;
if (idade <= 12) {
  categoria = "Infantil!";
} else if (idade >= 13 && idade <= 17) {
  categoria = "Juvenil!";
} else {
  categoria = "Adulto!";
}
alert("A sua categoria é: " + categoria);
