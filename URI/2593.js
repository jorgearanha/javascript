var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

let texto = lines[0];
let cond = parseInt(lines[1]);
let busca = lines[2].split(' ');

function imprimeIndices(str, regexp) {
    let match;
    let retorno = '';
    while ((match = regexp.exec(str)) !== null) {
        retorno += match.index + ' ';
    }
    console.log(retorno.trim() || '-1');
}

for (let i = 0; i < cond; i++) {
    let exp = new RegExp('(?<=^|\\s)' + busca[i] + '(?=\\s|$)', 'gi')
    imprimeIndices(texto, exp);    
}