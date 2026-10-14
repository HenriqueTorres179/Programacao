let codigo = Number(prompt("Qual o código do produto comprado?"));
let quantidade = parseInt(prompt("Qual a quantidade comprada?"));
let descricaoProduto;
let valorTotal;

if (Number.isInteger(codigo) && codigo >= 1 && codigo <= 4) {
  if (codigo == 1) {
    descricaoProduto = "Informática para Concursos";
    valorTotal = quantidade * 125.48;
  } else if (codigo == 2) {
    descricaoProduto = "Java como programar";
    valorTotal = quantidade * 108.36;
  } else if (codigo == 3) {
    descricaoProduto = "Lógica de Programação";
    valorTotal = quantidade * 99.99;
  } else if (codigo == 4) {
    descricaoProduto = "Fundamentos de Programação";
    valorTotal = quantidade * 215.67;
  }

  alert(
    "A descrição do produto é: " +
      descricaoProduto +
      "\n O valor total da compra é: R$ " +
      valorTotal.toFixed(2),
  );
} else {
  alert("Digite um código válido, de 1 a 4!");
}
