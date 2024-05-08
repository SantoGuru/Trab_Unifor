
function Maior(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  const primeiroDado = parseInt(numeros[0]);
  var holder = primeiroDado;
  for (i = 0; i < numeros.length; i++) {
    if (parseInt(numeros[i]) > holder) {
      holder = parseInt(numeros[i]);
    }
  }
  return holder;
}

function Menor(numeros) {
  if (numeros.length === 0) {
    return 0;
  }
  const primeiroDado = parseInt(numeros[0]);
  var holder = primeiroDado;
  for (i = 0; i < numeros.length; i++) {
    if (parseInt(numeros[i]) < holder) {
      holder = parseInt(numeros[i]);
    }
  }
  return holder;
}

function Contagem(n1, n2) {
  let aux = 0
  for (i = n1 - 1; i < n2; i++) {
    aux++
  }
  return aux
}

function LoadContagem(dados) {
  var conjuntoDeDados = dados.split(",")
  var result = []
  result.push(Contagem(Menor(conjuntoDeDados), Maior(conjuntoDeDados)))
  return result
}

module.exports = LoadContagem;