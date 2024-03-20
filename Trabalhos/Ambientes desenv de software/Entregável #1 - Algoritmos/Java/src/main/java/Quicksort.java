import java.util.*;

public class Quicksort {
  public void sort(int[] array) {
    if (array.length <= 1) {
      System.out.println("Alg_quicksort: " + array);
    }

    int pivot = array[0];
    List<Integer> lesser = new ArrayList<Integer>();
    List<Integer> equal = new ArrayList<Integer>();
    List<Integer> greater = new ArrayList<Integer>();

    for (int num : array) {
      if (num < pivot) {
        lesser.add(num);
      } else if (num == pivot) {
        equal.add(num);
      } else {
        greater.add(num);
      }
    }

    List<Integer> sorted = new ArrayList<Integer>();
    sorted.addAll(lesser);
    sorted.addAll(equal);
    sorted.addAll(greater);

    System.out.println("Alg_quicksort: " + sorted);
  }

  public Quicksort(String input) {
    String[] numerosString = input.split(",");
    int[] numeros = new int[numerosString.length];
    int i = 0;
    for (String num : numerosString) {
      numeros[i] = Integer.parseInt(num);
      i++;
    }
    sort(numeros);

  }
}