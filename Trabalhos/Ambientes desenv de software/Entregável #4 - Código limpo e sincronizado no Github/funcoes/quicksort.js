function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }

    const auxiliar = parseInt(array[0]);
    const menor = [];
    const igual = [];
    const maior = [];

    for (let i = 0; i < array.length; i++) {
      if (parseInt(array[i]) < auxiliar) {
        menor.push(parseInt(array[i]));
      } else if (parseInt(array[i]) === auxiliar) {
        igual.push(parseInt(array[i]));
      } else {
        maior.push(parseInt(array[i]));
      }
    }

    return quicksort(menor).concat(igual, quicksort(maior));
}
  function LoadQuicksort(dados){
    var a = dados.split(","); 
    const sortedArray = quicksort(a);

    return sortedArray
  }

module.exports = LoadQuicksort