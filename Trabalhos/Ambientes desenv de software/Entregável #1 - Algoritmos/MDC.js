var a = parseInt(prompt("Insira o valor de A"));
var b = parseInt(prompt("Insira o valor de B"));

function mdc(a, b) {
  var aux;
  while (a % b > 0) {
    aux = a % b;
    a = b;
    b = aux;
  }
  return b;
}

console.log(mdc(a, b));
