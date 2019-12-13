var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

let kung = Math.round(lines[0]/2);
let lu = Math.round(lines[1]/2);
let cont = 0;

while (kung != lu) {
    kung = Math.round(kung/2);
    lu = Math.round(lu/2);
    cont++;
}

let fase = {
    0 : 'oitavas',
    1 : 'quartas',
    2 : 'semifinal',
    3 : 'final'
}

console.log(fase[cont]);