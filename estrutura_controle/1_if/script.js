//exemplo 1
let idade = +prompt("Qual é a sua idade? (em anos)");
if (isNaN(idade)) {
  alert("Informe uma idade válida");
}
if (idade >= 18) {
  console.log("Pode entrar");
  alert("Pode entrar");
} else {
  console.log("não pode entrar");
  alert("não pode entrar");
}

//exemplo2

if (idade == 25) {
  console.log("A idade é igual a 25!");
  alert("A idade é igual a 25!");
} else {
  console.log("A idade é diferente de 25");
  alert("A idade é diferente de 25");
}

//exemplo 3

let nome = "Matheus";
if (nome == "Matheus" && idade > 10) {
  console.log("liberado");
  alert("liberado");
} else {
  console.log("Você não está liberado");
  alert("Você não está liberado");
}

//exemplo 4

let passaporte = true;
if ((nome == "Matheus" && idade > 30) || passaporte == true) {
  console.log("Liberado 2");
  alert("Liberado 2");
} else {
  console.log("Você não está liberado");
  alert("Você não está liberado");
}
