function Check(N) {
  if (N <= 1) {
    return "Dado invalido!"
    if (N == 1){
      return "o número 1 não é composto e nem considerado um número primo"
    } 
    return "Não é um número positivo/inteiro"
  } else {
  for (i = 2; i <= N; i++) {
      if (N % i == 0) {
        switch (N == i) {
          case true:
            return "É primo";
          case false:
            return "Não é primo";
        }
      }
    }
  }
}

function LoadPrimo(n){
  var n = parseInt(n); 
  return [Check(n)]
}

module.exports = LoadPrimo