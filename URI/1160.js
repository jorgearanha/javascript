var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\n');

function obj(str) {
    let arrStr = str.split(' ');
    this.pa = parseInt(arrStr[0]);
    this.pb = parseInt(arrStr[1]);
    this.g1 = parseFloat(arrStr[2]);
    this.g2 = parseFloat(arrStr[3]);
}

function crescPop(instancia) {
    let anos = 0;

    while (instancia.pa < instancia.pb && anos <= 100) {
        instancia.pa = parseInt(instancia.pa + instancia.pa * (instancia.g1/100));
        instancia.pb = parseInt(instancia.pb + instancia.pb * (instancia.g2/100));
        anos++;
    }
    
    return anos;
}

let num = parseInt(lines[0]);

for (let i = 1; i <= num; i++) {
    let line = lines[i];
    
    let instancia = new obj(line);
    let anos = crescPop(instancia);

    if (anos > 100) {
        console.log('Mais de 1 seculo. ');
    } else {
        console.log(parseInt(anos) + ' anos. ');
    }
}