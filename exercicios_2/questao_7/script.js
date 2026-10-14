let idade = +prompt("Digite a sua idade:");
while (isNaN(idade)) {
  idade = +prompt("Digite uma idade válida!");
}
let passagem = +prompt("Qual o preço da passagem?");
while (isNaN(passagem)) {
  passagem = +prompt("Digite um valor de passagem válido!");
}
let precoPagar;
let meiaInteira;
if (idade <= 12) {
  meiaInteira = "Meia!";
  precoPagar = passagem / 2;
} else {
  meiaInteira = "Inteira!";
  precoPagar = passagem;
}
precoPagar = precoPagar.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
alert(
  "Você irá pagar: " +
    meiaInteira +
    " \n O preço a ser pago é de: " +
    precoPagar,
);
