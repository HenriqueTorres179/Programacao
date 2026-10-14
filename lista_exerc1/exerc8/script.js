let preco = parseFloat(prompt("Digite o preço:"));
let cobrado = parseFloat(prompt("Digite o valor cobrado:"));
let porcentagem = ((preco - cobrado) / preco) * 100;
alert(`O desconto é de: ` + porcentagem.toFixed(2) + "%");
