var N = parseInt(prompt("Insira um número positivo e inteiro")); // Entrada de Dados

if (N <= 1) {
  alert("Número invalido");
} else {
  function Check(N) {
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
  document.write("O número digitado: " + Check(N));
}
