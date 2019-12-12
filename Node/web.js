var http = require('http');
http.createServer(function ( req, res ) { // req = requisição, res = resposta
    res.writeHead( 200, { 'Content-Type': 'text/plain;charset=utf-8' } );
    res.end( 'Olá, Web!\n' );
}).listen(8080);
console.log( 'Servidor rodando no localhost:8080' );
