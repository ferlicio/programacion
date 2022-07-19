let bin = prompt("digite um valor em binario:");
let dec = 0

for (let c = bin.length-1; c >= 0;  c-- ){
console.log("c" + c)
    for (i = 0; i < bin.length; i++ )
    console.log("i" + i)
        if (bin[c] == 1){
            dec += 2**(i)
            console.log("bin" + bin)
            console.log("dec" + dec)

        }
        
    }
document.write(`seu numero em decimal é ${dec}`)