const connection = require('../database/connection');

module.exports = {
    async valida (request,response){
        const {token}  = request.query;
        console.log("TOKEN"+token);
        
        try {
            const [idUser] = await connection('usuario').select('idusuario').where('cod','=',token);
            console.log('ID USER'+idUser.idusuario);
            if(!idUser){
                
                response.redirect('https://mojal.netlify.app');
                
                
            }else if(idUser.idusuario == 1){
                response.json({status:true});
            }
        } catch (error) {
            console.log('Erro:'+error);
            response.redirect('https://mojal.netlify.app');
        }
        
    }
}