const connection = require('../database/connection');

module.exports = {
    async valida (request,response){
        const {token}  = request.query;
        
        const cod = String(token);
        
        try {
            
           // const [email_cad] = await connection('usuario').select('email').where('email',email);
            const [idUser] = await connection('usuario').select('idusuario').where('cod',cod);
            
            ///console.log('ID USER'+idUser.idusuario);
            if(!idUser){

                response.json({status:false});

            }else if(idUser.idusuario == 1){
                
                response.json({status:true});
            }
        } catch (error) {
            console.log('Erro:'+error);
            response.json({status:false});
        }
        
    }
}