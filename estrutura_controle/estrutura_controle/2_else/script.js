//exemplo 1

let nome = "Pedro";

if ((nome = "João")) {
  console.log("Seu nome é joão");
  alert("Seu nome é joão");
} else {
  console.log("Seu nome não é joão");
  alert("Seu nome não é joão");
}

//exemplo 2

let velocidade = +prompt("Digite a velocidade: (em km/hr)");
if (velocidade <= 80) {
  console.log("Não foi multado!");
  alert("Não foi multado!");
} else {
  console.log("Foi multado!");
  alert("Foi multado!")
}
