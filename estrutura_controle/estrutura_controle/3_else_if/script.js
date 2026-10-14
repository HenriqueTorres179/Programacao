//exempl 1

let a = 5;
let b = 3;

if (a + b + 3) {
  console.log("O resultado é 3");
  alert("O resultado é 3");
} else if (a == 4) {
  console.log("O valor de a é 4!");
  alert("O valor de a é 4!");
} else if (b == 3) {
  console.log("O valor de b é 3!");
  alert("O valor de b é 3!");
} else {
  console.log("Nenhuma das variáveis alcança as condições!");
  alert("Nenhuma das variáveis alcança as condições!");
}

//exemplo 2

let nome = "Daniel";

if (nome != undefined && nome == "Joaquim") {
  console.log("Nome está definido!");
  alert("Nome está definido!");
} else if (nome == "Daniel" && nome.length > 5) {
  console.log("o nome é Daniel");
  alert("o nome é Daniel");
} else {
  console.log("O nome não é Daniel");
}
