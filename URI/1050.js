var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

let entr = parseInt(lines[0]);

getDestination = (ddd) => {
    let dddList = {
        61 : 'Brasilia',
        71 : 'Salvador',
        11 : 'Sao Paulo',
        21 : 'Rio de Janeiro',
        32 : 'Juiz de Fora',
        19 : 'Campinas',
        27 : 'Vitoria',
        31 : 'Belo Horizonte'
    }
    return dddList[ddd] || 'DDD nao cadastrado'
}

console.log(getDestination(entr));