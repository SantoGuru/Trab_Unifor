public class Contagem {
  public int Maior(String[] numeros) {
    if (numeros.length == 0) {
      return 0;
    }
    int holder = Integer.parseInt(numeros[0]);
    for (int i = 0; i < numeros.length; i++) {
      if (Integer.parseInt(numeros[i]) > holder) {
        holder = Integer.parseInt(numeros[i]);
      }
    }
    return holder;
  }

  public int Menor(String[] numeros) {
    if (numeros.length == 0) {
      return 0;
    }
    int holder = Integer.parseInt(numeros[0]);
    for (int i = 0; i < numeros.length; i++) {
      if (Integer.parseInt(numeros[i]) < holder) {
        holder = Integer.parseInt(numeros[i]);
      }
    }
    return holder;
  }

  public int Contador(int n1, int n2) {
    int aux = 0;
    for (int i = n1 - 1; i < n2; i++) {
      aux++;
    }
    return aux;
  }

  public Contagem(String input) {
    String[] conjuntoDeDados = input.split(",");

    int menor = Menor(conjuntoDeDados);
    int maior = Maior(conjuntoDeDados);

    int quantidadeValoresInteiros = Contador(menor, maior);
    System.out.println("Alg_Contagem: " + quantidadeValoresInteiros + " é a quantidade de valores inteiros");
  }
}