function Fibonacci(n){
    var n = parseInt(n)
    var Fibo = []
    if (!isNaN(n)){
     for (i=1;i<=n;i++){
         function FiboInter(n){
         var antepNum
         var penNum = 0
         var numAtual = 1
         if ((n==0)||(n==1)){
             return n
         }
         for(x=2;x<=n;x++){
             antepNum = penNum
             penNum = numAtual
             numAtual = antepNum + penNum
         }
         return numAtual
         }
         Fibo.push(FiboInter(i))
     }
        return [Fibo.join(",")]
    }else{
        return "Dado inserido é invalido!"
    }
}

module.exports = Fibonacci;