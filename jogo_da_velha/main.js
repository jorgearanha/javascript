
function main() {

    let linha1 = document.getElementsByClassName('linha1').item(0);
    let linha2 = document.getElementsByClassName('linha2').item(0);
    let linha3 = document.getElementsByClassName('linha3').item(0);

    // Construindo um Array de linhas para formar o tabuleiro
    let tabuleiro = [linhaToArray(linha1), linhaToArray(linha2), linhaToArray(linha3)];

    clickTabuleiro(tabuleiro);
    
}

function clickTabuleiro(tabuleiro){
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++){
            tabuleiro[i][j].addEventListener('click', () => {
                let elem = document.createElement('h1');
                elem.innerHTML = 'X';
                tabuleiro[i][j].appendChild(elem);
                
                
            });
        }
    }
}

function linhaToArray(linha) {
    let arrLinha = [];
    for (let index = 1; index <= 3; index++) {
        arrLinha.push(linha.getElementsByClassName('coluna' + index).item(0))
    }
    return arrLinha;
}

document.addEventListener("DOMContentLoaded", main);