public class nPrimo {
  boolean isPrimo;

  public void verify(int number) {
    this.isPrimo = true;
    if (number <= 1) {
      this.isPrimo = false;
    } else {
      for (int i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
          this.isPrimo = false;
          break;
        }
      }
    }
    ;

    if (this.isPrimo) {
      System.out.println("Alg_nPrimo: " + number + " é um número primo");
    } else {
      System.out.println("Alg_nPrimo: " + number + " não é um número primo");
    }
    ;
  };

  public nPrimo(int number) {
    this.verify(number);
  }
};