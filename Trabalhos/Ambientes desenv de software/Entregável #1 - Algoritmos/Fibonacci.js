var N

function Fibo(n) {
    for (i=1;i<=n;i++){
        function FiboInter(n){
        let antepNum
        let penNum = 0
        let numAtual = 1
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
        console.log(FiboInter(i))
    }
}

Fibo(prompt("Insira quantos números da sequência você deseja ?"))