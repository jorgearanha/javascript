var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

let texto = lines[0];
let cond = lines[1];
let busca = lines[2].split('\s', '');

console.log(texto);
console.log(cond);
console.log(busca);

for (let i = 1; i <= lines[1]; i++) {
    console.log(lines[i].replace(/\B(?:[a-z])\w*|\s+/g, ''));
}