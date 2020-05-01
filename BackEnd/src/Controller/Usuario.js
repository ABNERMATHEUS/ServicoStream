const connection = require('../database/connection');
const nodemailer = require('./Email');
const crypto  = require('crypto');


function EnviarEmailVerificao (toEmail,cod){
    const url = 'http://localhost:3333/valida?cod='+cod
        
    email = {
        from: "bdflix2020@gmail.com",
        to: toEmail,
        subject: 'E-mail enviado usando Node!',
        text: 'Bem fácil, não? ;)',
        html: '<h1>VERIFICAR</h1><br> <a href='+url+'>Verificar</a> <button>Clique aqui</button>'
    };

    
    nodemailer.transport.sendMail(email,(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log('Email enviado '+info.response);
        }
    })

};

module.exports = {

    async create (request,response){        
        const {nome,sobrenome,email,senha, telefone, nascimento} = request.body
        const cod = crypto.randomBytes(5).toString('HEX');
        const status = 1;
    try {   
            const [email_cad] = await connection('usuario').select('email').where('email',email)
            console.log(email_cad)
            if(email_cad== null){

                await connection('usuario').insert({
                    nome,
                    sobrenome,
                    email,
                    senha,
                    cod,
                    telefone,
                    nascimento,
                    status
                });
    
                EnviarEmailVerificao(email,cod); //Encaminhar Email para fazer verificação
    
                response.json({status:true});
                
            }else{
                response.json({status:false,msg:"Você já tem um conta com este e-mail"})            

            }
            
            
        } catch (error) {

            response.json({status:false,msg:"Estamos com problemas técnicos, tente mais tarde"})
                        
        }
        
    },


    async valida (request,response){
        
        const {email, senha } = request.query;
        
        
    try {
        
        const [idUser] = await  connection('usuario').select('idusuario')
        .where('email',email)
        .andWhere('senha',senha)
        .andWhere('verificado',1);
        
        
        if(!idUser){
            response.json({status:false});
        }
        else { 
                response.json({status:true,id:idUser.idusuario})
            }

    } catch (error) {

        response.json({status:false});
    }

    


} 


}