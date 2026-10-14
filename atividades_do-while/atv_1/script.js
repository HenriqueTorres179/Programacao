let peso;
let excesso = 0;
let multa = 0;

do {
  peso = +prompt("Digite o peso dos peixes em kg:");
  if (peso <= 0 || peso >= 150 || isNaN(peso)) {
    alert("Erro! O peso deve ser maior que 0 e menor que 150 kg.");
  }
} while (peso <= 0 || peso >= 150 || isNaN(peso));
if (peso > 50) {
  excesso = peso - 50;
  multa = excesso * 8;
}
alert("O peso do excesso é: " + excesso.toFixed(3) + " kg");
alert("O valor da multa a ser pago é de: R$ " + multa.toFixed(2));
