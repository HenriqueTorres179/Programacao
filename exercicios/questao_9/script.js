let dinheiroCaixa = +prompt("Quanto dinheiro tem no caixa da empresa?");
let produtos = +prompt("Quantos produtos serão comprados?");
let preco = +prompt("Qual o valor de cada produto?");
let formaPagamento;
let valorFinal;
let valorTotal = produtos * preco;
let juros = valorTotal * 0.1;
let desconto = valorTotal * 0.05;
let limiteParcelamento = dinheiroCaixa * 0.8;

if (valorTotal >= limiteParcelamento) {
  formaPagamento = "Parcelado em 3 vezes!";
  valorFinal = valorTotal + juros;
} else {
  formaPagamento = "A vista!";
  valorFinal = valorTotal - desconto;
}
alert("A forma de pagamento será: " + formaPagamento);
alert("O valor final a ser pago será de: " + valorFinal.toFixed(2));
