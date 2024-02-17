
  function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }

    const auxiliar = array[0];
    const menor = [];
    const igual = [];
    const maior = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] < auxiliar) {
        menor.push(array[i]);
      } else if (array[i] === auxiliar) {
        igual.push(array[i]);
      } else {
        maior.push(array[i]);
      }
    }

    return quicksort(menor).concat(igual, quicksort(maior));
  }

  const promptedArray = prompt("Insira o array de números separado por um espaço").split(" ");
  const sortedArray = quicksort(promptedArray);
  console.log(sortedArray)
