var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

let i = 0;
while (lines[i] != '*'){
    let exp = new RegExp('\\b(?!'+ lines[i][0] +')\\w+', 'gi');
    if (exp.test(lines[i])) {
        console.log('N');
    } else {
        console.log('Y');
    }
    i++
}