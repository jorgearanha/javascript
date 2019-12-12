var input = require('fs').readFileSync('./entrada.txt', 'utf8');
var lines = input.split('\r\n');

function even_odd(entr){
    if (entr%2 == 0){
        return 'EVEN';
    }else{
        return 'ODD';
    }
} 

function pos_neg(entr){
    if (entr >= 0){
        return 'POSITIVE';
    } else {
        return 'NEGATIVE';
    }
}

function concat_string(entr){
    if (entr == 0){
        return 'NULL';
    }else {
        return even_odd(entr) + ' ' + pos_neg(entr);
    }
}

for (let i = 1; i <= parseInt(lines[0]); i++){
    let entr = lines[i];
    console.log(concat_string(entr));   
}