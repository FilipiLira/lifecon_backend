const lodash = require('lodash')
// Este modulo deve ser chamado após a chamada de cada método HTTP da API
// com o metodo do node-restful after() , Ex: User.after('post', moduloTrataErro).after('put'...)...

// obs: fazendo testes, descobri que já existe um pratamento de erro nativo (e bem completo), ainda não sei se
// vem do node-restful ou do próprio Express.

// Modulo que faz o tratamento de erros de requisição na API
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errors){ // se houverem erros
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors}) // retorna os erros em formato JSON com código de erro 500
    } else {
        next()
    }
}

// Armazena os erros em uma array para organizar
const parseErrors = (nodeRestFulErrors) => { // recebe os erros
     const errors = []

     // Usa o metodo forIn() da biblioteca lodash para iterar sobre os as mensagens de erro de nodeRestFulErrors
     lodash.forIn(nodeRestFulErrors, error => errors.push(error.message))
     return errors
}