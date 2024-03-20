public class Main {
  public static void main(String[] args) {

    // 1. nPrimo
    // Para inicializar o algortimo, é necessário criar uma instância de nPrimo
    // declarando qual número deseja verificar.
    nPrimo Alg_nPrimo = new nPrimo(3);

    // 2. Somatório
    // Para inicializar o algortimo, é necessário criar uma instância de Somatorio
    // declarando quais números deseja verificar separando os mesmos por "," dentro
    // da string.

    Somatorio Alg_Somatorio = new Somatorio("1,2,3,4");

    // 3. Fibonacci
    // Para inicializar o algortimo, é necessário criar uma instância de Fibonacci
    // declarando qual a posição você deseja verificar.

    Fibonacci Alg_Fibonacci = new Fibonacci(10);

    // 4. MDC
    // Para inicializar o algortimo, é necessário criar uma instância de MDC,
    // declarando os dois inteiros que deseja realizar a operação de MDC

    MDC Alg_MDC = new MDC(10, 5);

    // 5. quicksort
    // Para inicializar o algortimo, é necessário criar uma instância de quicksort,
    // declarando uma string com os números que deseja ordenar separando os mesmos
    // por "," dentro
    Quicksort alg_quicksort = new Quicksort("1,5,2,3,4,5");

    // 6. Contagem
    // Para inicializar o algortimo, é necessário criar uma instância de Contagem,
    // declarando uma string com os números que deseja contar separando os mesmos
    // por "," dentro (Ele pegara o menor o e maior número e contará a quantidade
    // entre eles)

    Contagem alg_contagem = new Contagem("2,3,4,5,6,7");

  }
}