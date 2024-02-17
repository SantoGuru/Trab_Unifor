
  function Maior(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    const primeiroDado = numeros[0];
    let holder = primeiroDado;
    for (i = 0; i < numeros.length; i++) {
      if (numeros[i] > holder) {
        holder = numeros[i];
      }
    }
    return holder;
  }

  function Menor(numeros) {
    if (numeros.length === 0) {
      return 0;
    }
    const primeiroDado = numeros[0];
    let holder = primeiroDado;
    for (i = 0; i < numeros.length; i++) {
      if (numeros[i] < holder) {
        holder = numeros[i];
      }
    }
    return holder;
  }

  function Contagem(n1,n2){
    let aux = 0
    for(i=n1-1;i<n2;i++){
      aux++
    }
    return aux
  }

  const conjuntoDeDados = prompt("Insira o conjunto de dados, separados por espaço").split(" ");
  console.log(`Existem ${Contagem(Menor(conjuntoDeDados),Maior(conjuntoDeDados))} valores inteiros entre ${Menor(conjuntoDeDados)} e ${Maior(conjuntoDeDados)}.`);
