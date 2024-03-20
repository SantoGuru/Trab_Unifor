public class Somatorio {
  double soma = 0;

  public void Check(String N) {
    String[] numeros = N.split(",");
    int soma = 0;

    for (String num : numeros) {
      soma += Integer.parseInt(num);
    }
    System.out.println("Alg_Somatorio: " + soma + " é o resultado do somatorio");
  }

  public Somatorio(String N) {
    Check(N);
  }
}