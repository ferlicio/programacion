alert("vamos fazer algumas operações");

let qtdnum = parseInt(parseFloat(prompt("quantos numeros você deseja utilizar:")));

let num = [];
let sum = 0;
let media = 0;


for (let i = 0; i < qtdnum; i++) {
    num[i] = parseFloat(prompt(`qual é o ${i + 1}º numero você deseja utilizar:`).replace(",", "."));
}

sum = num.reduce((a, b) => a + b);
document.write(`a soma dos numero é igual a ${sum}<br>`);

media = sum / qtdnum
document.write(`a média dos numeros é ${media}<br>`);

for (let i = 0; i < qtdnum; i++) {

    document.write(`${num[i]}^2 = ${num[i] * num[i]}<br>`);
}

for (let i = 0; i < qtdnum; i++) {

    document.write(`√${num[i]} = ${Math.sqrt(num[i])}<br>`); 
}

for (let i = 0; i < qtdnum; i++) {

    document.write(`∛${num[i]} = ${num[i] ** (1 / 3)}<br>`);

}