
//Criando a variavel e iniciando o codigo
        const num = []
        alert("Vamos saber qual é o maior numero!")

//pegando os numeros com prompt
        for (let i = 0; i < 3; i++) {
                switch(i+1) {
                        case(1):
                        num.push(parseInt(prompt("qual é o primeiro numero?")))
                        break;
                        case(2):
                        num.push(parseInt(prompt("qual é o segundo numero?")))
                        break;
                        case(3):
                        num.push(parseInt(prompt("qual é o terceiro numero?")))
                        break;
                }
        }

//Informando o maior numero entre eles
        alert(`Entre todos os numeros que você informou, ${Math.max(...num)} é o maior`)
