const connection = require('../database/connection');


module.exports ={


    async verifica (request,response){
        const {cod} = request.query // http://localhost:3333/valida?cod=(código de verificacao)
        
        await connection('usuario').where('cod','=',cod).update({verificado:1})
        response.redirect('http://localhost/ServicoStream/page/verificacao.html') // Redirecionar para uma página de dizendo que foi vereficado (FRONT)
        
    }, 


}