var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

function fatorial(fator) {
    if (fator == 1) {
        return 1;
    } else {
        return fator * fatorial(fator - 1)
    }
}

console.log(fatorial(lines[0]));