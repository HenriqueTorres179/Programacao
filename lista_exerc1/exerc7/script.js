let n1= parseFloat(prompt("A primeira nota é: "));
let n2= parseFloat(prompt("A segunda nota é: "));
let n3= parseFloat(prompt("A terceira nota é: "))
let p1=2
let p2=3
let p3=5
if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
  alert("Informe uma nota válida!")
} else {
let media= (n1*p1+n2*p2+n3*p3)/(p1+p2+p3);
alert(`A média final é: `+ media.toFixed(2));
}
