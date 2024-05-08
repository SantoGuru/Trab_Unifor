function mdc(a, b) {
  var aux;
  while (a % b > 0) {
    aux = a % b;
    a = b;
    b = aux;
  }
  return b;
}

function LoadMDC(a,b){
  var a = parseInt(a)
  var b = parseInt(b)
  return [mdc(a, b)]
}

module.exports = LoadMDC