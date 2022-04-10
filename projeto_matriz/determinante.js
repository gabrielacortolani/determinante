Sylvester = require('sylvester')
const prompt = require('prompt-sync')();

const ordem = prompt('Informe ordem da matriz: ');
let matriz = []

for (let linha = 0; linha< ordem; linha++){
    let linhaMatriz =[]
    for (let coluna = 0; coluna < ordem; coluna++){
        linhaMatriz.push(prompt(`Informe um valor para a linha: ${linha +1} coluna ${coluna +1}: `))
    }
    matriz.push(linhaMatriz);
}

console.log(matriz);
console.log(Sylvester.matriz);
var m= $M([
     [ '1','2','4'], ['3', '2', '3'], ['3', '2', '3']
]).determinant(m)
console.log(m)

