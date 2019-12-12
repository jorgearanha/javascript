var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

function obj(str) {
    let arrStr = str.split(' ');
    this.pa = arrStr[0];
    this.pb = arrStr[1];
    this.g1 = arrStr[2];
    this.g2 = arrStr[3];
}

function crescPop() {
    for (let i = 1; i < lines[0]; i++) {   
        
        console.log(obj(lines(i)));
         
    }
}

crescPop()