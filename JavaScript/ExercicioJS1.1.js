//Criando a variavel e iniciando o codigo
const triang = []
alert("hoje vamos descobrir a classificação de um triangulo!")

//Pegando as medidas do triangulo
for (let i = 0; i < 3; i++) {
    switch(i+1) {
        case(1):
        triang.push(parseInt(prompt("qual a medida do primeiro lado?")))
        break;
        case(2):
        triang.push(parseInt(prompt("qual a medida do segundo lado?")))
        break;
        case(3):
        triang.push(parseInt(prompt("qual a medida do terceiro lado?")))
        break;
    }
}

//informando a classificação do triangulo
if (triang[0] == triang[1] && triang[1]  == triang[2]) {
    alert("seu triangulo é equilátero")
} else if (triang[0] == triang[1] || triang[0] == triang[2] || triang[1] == triang[2]){
    alert("seu triangulo é isóceles")
} else {
    alert("seu triangulo é escaleno")
}