// server.js
const fs = require('fs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())

const SECRET_KEY = '123456789'
const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

function funcionalExists({ funcional }) {
    return userdb.users.findIndex(user => user.funcional == funcional) !== -1
}

// Check if the user exists in database
function isAuthenticated({ funcional, senha }) {
    return userdb.users.findIndex(user => user.funcional == funcional && user.senha == senha) !== -1
}

server.post('/api/auth/login', (req, res, next) => {
    console.log(req.body);
    
    if(!req.body || !req.body.funcional) {
        res.status(500).json({
            "CodigoRetorno": 500,
            "MensagemRetorno": "Internal server error",
            "FonteErro": "xxxxxx"

        })
        return
    }

    const {funcional, senha} = req.body

    if (funcionalExists({ funcional }) === false) {
        const status = 404
        const message = 'Usuario de funcional ' + funcional + ' não encontrado.'
        res.status(status).json({
            "CodigoRetorno": status,
            "MensagemRetorno": message,
            "FonteErro": "Rede.GE.Seguranca.Infraestrutura.Seguranca.UserStorePersonalizada+<>c__DisplayClass15_0"
        })
        return
    }
    else if (isAuthenticated({ funcional, senha }) === false) {
        const status = 401
        const message = 'Login Inválido, avalie usuário e senha.'
        res.status(status).json({
            "CodigoRetorno": status,
            "MensagemRetorno": message,
            "FonteErro": "Rede.GE.Seguranca.Infraestrutura.Seguranca.GerenciadorLoginPersonalizado+<PasswordSignInAsync>d__15"
        })
        return
    } 
    const jwtToken = createToken({ funcional, senha })
    res.status(200).json({ jwtToken, "tokenGerado": true })
})

server.use(router)
server.listen(3333, () => {
    console.log('JSON Server is running')
})