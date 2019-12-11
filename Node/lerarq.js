// Carregando o módulo fs (filesystem)
var fs = require('fs');
// Leia o conteúdo do arquivo para a memória
fs.readFile('lerarq.txt', function ( err, logData ) {
    // Se um erro ocorrer, será lançada uma
    // exceção, e a aplicação irá ser encerrada
    if ( err ) throw err;
    // logData é um Buffer, converta-o para string
    console.log(logData.toString());
});
