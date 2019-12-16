const panettone = {
    elem: document.createElement('img'),
    nome: 'panettone'
};
panettone.elem.src = 'images/panettone.png';
panettone.elem.className = 'pane ttones';

const chocottone = {
    elem: document.createElement('img'),
    nome: 'chocottone'
};
chocottone.elem.src = 'images/chocottone.png';
chocottone.elem.className = 'choco ttones';

var ttone = panettone;

function main() {

    let coluna1 = document.getElementsByClassName('linha1').item(0);
    let coluna2 = document.getElementsByClassName('linha2').item(0);
    let coluna3 = document.getElementsByClassName('linha3').item(0);

    // Construindo um Array de linhas para formar o tabuleiro
    let tabuleiro = [montaLinha(coluna1), montaLinha(coluna2), montaLinha(coluna3)];

    clickTabuleiro(tabuleiro);
}

function clickTabuleiro(tabuleiro) {
    for (let i = 0; i < tabuleiro.length; i++) {
        for (let j = 0; j < tabuleiro[i].length; j++) {
            // Cria a arrow function referenciada em evento para poder ser removida após o primeiro click.
            let evento = () => {
                if (!verificaVencedor(tabuleiro)) {
                    // Executa o evento esperado ao clicar no tabuleiro.
                    let clone = ttone.elem.cloneNode(true);
                    tabuleiro[i][j].elem.appendChild(clone);
                    tabuleiro[i][j].ttone = ttone.nome;
                    // Impede o evento de ocorrer novamente após o primeiro click.
                    tabuleiro[i][j].elem.removeEventListener('click', evento);

                    let vencedor = verificaVencedor(tabuleiro);
                    if (vencedor) {
                        exibeVencedor(vencedor);
                    } else if (verificaVelha(tabuleiro)) alert('Deu velha');
                    // Altera o ttone a cada rodada.
                    alteraTtone();
                }
            }
            tabuleiro[i][j].elem.addEventListener('click', evento);
        }
    }
}

function verificaVencedor(tab) {
    for (let i = 0; i < 3; i++) {
        if (
            (((tab[i][0].ttone && tab[i][1].ttone) && tab[i][2].ttone) && ((tab[i][0].ttone == tab[i][1].ttone) && (tab[i][0].ttone == tab[i][2].ttone))) ||
            (((tab[0][i].ttone && tab[1][i].ttone) && tab[2][i].ttone) && ((tab[0][i].ttone == tab[1][i].ttone) && (tab[0][i].ttone == tab[2][i].ttone)))
        ) return tab[i][i].ttone;
        else if (
            (((tab[0][0].ttone && tab[1][1].ttone) && tab[2][2].ttone) && ((tab[0][0].ttone == tab[1][1].ttone) && (tab[0][0].ttone == tab[2][2].ttone))) ||
            (((tab[2][0].ttone && tab[1][1].ttone) && tab[0][2].ttone) && ((tab[2][0].ttone == tab[1][1].ttone) && (tab[2][0].ttone == tab[0][2].ttone)))
        ) return tab[1][1].ttone;
    }
}

function verificaVelha(tab) {
    let boo = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            boo = boo && tab[i][j].ttone;
        }
    }
    return boo;
}

function alteraTtone() {
    if (ttone == panettone) ttone = chocottone;
    else ttone = panettone;
}

function exibeVencedor(vencedor){
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Parabéns!!',
            text: 'O vencedor foi: ' + vencedor,
            showConfirmButton: true,
            showClass: {
                popup: 'animated fadeInDown faster'
              },
              hideClass: {
                popup: 'animated fadeOutUp faster'
              }
          }).then((result) => {
            if (result.value) {
                if (vencedor == 'panettonne') 
                window.open('https://www.lojabauducco.com.br/panettone-frutas-500g-caixa12--59-/p', '_blank');
                else window.open('https://www.lojabauducco.com.br/chocottone-gotas-500g-caixa--64-/p', '_blank');
                window.location.reload();
            }
          })
    }, 500);
}

function montaLinha(coluna) {
    let arrColuna = [];
    for (let index = 1; index <= 3; index++) {
        arrColuna.push({
            elem: coluna.getElementsByClassName('coluna' + index).item(0),
            ttone: ''
        });
    }
    return arrColuna;
}

document.addEventListener("DOMContentLoaded", main);