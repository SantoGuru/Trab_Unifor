var N = prompt("Insira um conjunto de números separados por vírgula"); // Entrada de Dados
var soma = 0;

function Check(N) {
  numeros = N.split(",")
  for (i in numeros) {
    soma += parseInt(numeros[i]);
  }
  return soma;
}

document.write("Soma final: " + Check(N));