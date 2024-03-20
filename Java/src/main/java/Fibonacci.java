import java.util.*;

public class Fibonacci {
  public void Fibo(int n) {
    List<Integer> fibonacci = new ArrayList<Integer>();
    for (int i = 1; i <= n; i++) {
      fibonacci.add(FiboInter(i));
    }
    System.out.println("Alg_Fibonacci: " + fibonacci + " são os números até a posição indicada");
  }

  public int FiboInter(int n) {
    int antepNum;
    int penNum = 0;
    int numAtual = 1;

    if (n == 0 || n == 1) {
      return n;
    }

    for (int x = 2; x <= n; x++) {
      antepNum = penNum;
      penNum = numAtual;
      numAtual = antepNum + penNum;
    }
    return numAtual;
  }

  public Fibonacci(int n) {
    Fibo(n);
  }
}