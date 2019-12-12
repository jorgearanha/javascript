var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

let r = parseFloat(lines[0]);
let pi = 3.14159;

console.log("A="+(pi*(r*r)).toFixed(4));