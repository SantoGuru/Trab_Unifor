public class MDC {

  public void mdc(int a, int b) {
    int aux;
    while (a % b > 0) {
      aux = a % b;
      a = b;
      b = aux;
    }
    System.out.println("Alg_MDC: " + b);
  };

  public MDC(int a, int b) {
    mdc(a, b);
  };
}