var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

let cond = lines[0]*2;

function imprimeIndices(str, regexp) {
    let match;
    let retorno = '';
    while ((match = regexp.exec(str)) !== null) {
        retorno += match.index + ' ';
    }
    console.log(retorno.trim() || '-1');
}

for (let i = 1; i <= cond; i+=2) {
    let exp = new RegExp('(?<=^|\\s)' + lines[i+1] + '(?=\\s|$)', 'gi')
    imprimeIndices(lines[i], exp);    
}