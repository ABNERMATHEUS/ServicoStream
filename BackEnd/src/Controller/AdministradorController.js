const connection = require('../database/connection');

module.exports = {
    async valida (request,response){
        const {token}  = request.query;
        
        try {
            const [idUser] = connection('usuario').select('idusuario').where('cod','=',token);
            console.log('ID USER'+idUser);
            if(!idUser){
                response.redirect('https://mojal.netlify.app');
                
            }else if(idUser.idusuario == 1){
                response.json({status:true});
            }
        } catch (error) {
            console.log('Erro:'+Error);
            response.redirect('https://mojal.netlify.app');
        }
        
    }
}