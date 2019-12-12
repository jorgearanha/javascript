var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

console.log("X = "+(parseInt(lines[0])+parseInt(lines[1])));