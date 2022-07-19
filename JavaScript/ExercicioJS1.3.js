
//criando as variaveis
        let numeros = []
        let num1 = 0
        let num2 = 0
        alert("Digite dois numeros inteiros")

// pegando os numeros atraves do prompt
        for (let i = 0; i < 2; i++) {
            switch(i+1) {
                
                case(1):
                num1 = parseFloat(prompt("qual é o primeiro numero?").replace(",","."))
                while (!Number.isInteger(num1)) {
                    num1 = parseFloat(prompt("não é um numero inteiro, tente novamente").replace(",","."))
                }
                break;
                
                case(2):
                num2 = parseFloat(prompt("qual é o segundo numero?").replace(",","."))
                while (!Number.isInteger(num2)) {
                    num2 = parseFloat(prompt("não é um numero inteiro, tente novamente").replace(",","."))
                }
            }
        }
numeros.push(num1, num2)
num1 = numeros[1]
num2 = numeros[0]


//Definindo a variavel inv_numeros como o inverso da variavel numeros 
        document.write(`<p> os numeros inseridos foram ${numeros[0]} e ${numeros[1]}</p>`)
        document.write(`<p> trocando os numeros entre as variáveis, o valor de cada um é ${num1} e ${num2}</p>`)

