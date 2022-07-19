
//criando as variaveis
        let numeros = []
        let inv_numeros = []
        alert("Digite dois numeros inteiros")

// pegando os numeros atraves do prompt
        for (let i = 0; i < 2; i++) {
            switch(i+1) {
                
                case(1):
                numeros[i] = parseFloat(prompt("qual é o primeiro numero?").replace(",","."))
                while (!Number.isInteger(numeros[i])) {
                    numeros[i] = parseFloat(prompt("não é um numero inteiro, tente novamente"))
                }
                break;
                
                case(2):
                numeros[i] = parseFloat(prompt("qual é o segundo numero?").replace(",","."))
                while (!Number.isInteger(numeros[i])) {
                    numeros[i] = parseFloat(prompt("não é um numero inteiro, tente novamente"))
                }
            }
        }

//Definindo a variavel inv_numeros como o inverso da variavel numeros e exibe na tela o resultado
        inv_numeros = numeros.slice().reverse()
        document.write(`<p> a array normal contem os numeros ${numeros[0]} e ${numeros[1]}</p>`)
        document.write(`<p> a array invertida contem os numeros ${inv_numeros[0]} e ${inv_numeros[1]}</p>`)
