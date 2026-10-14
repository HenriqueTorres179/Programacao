let a = +prompt("Qual é o valor de a?");
let b = +prompt("Qual é o valor de b?");
let resultado;

if (a > b) {
  resultado = "É maior!";
} else {
  resultado = "É menor!";
}
console.log(resultado);
alert(`${resultado}`);
