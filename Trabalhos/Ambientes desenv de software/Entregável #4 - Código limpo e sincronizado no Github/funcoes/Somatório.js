function Check(N) {
  var soma = 0;
  numeros = N
  for (i in numeros) {
    soma += parseInt(numeros[i]);
  }
  return soma;
}

function LoadSomatorio(dados){
  var dados = dados.split(","); 
  return [Check(dados)]
}

module.exports = LoadSomatorio