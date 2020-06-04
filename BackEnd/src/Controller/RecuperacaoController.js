const connection = require('../database/connection');
const crypto    = require('crypto');
const nodemailer = require('./Email');

function EnviarEmail(toEmail,cod){

    const url ='https://mojal.netlify.app/page/resetarsenha.html?token='+cod;
    email = {
        from: "bdflix2020@gmail.com",
        to: toEmail,
        subject: 'MOJA FILMES',
        text: 'Alterar Senha',
        html: "<h1>Resetar senha </h1><br><a href="+url+"> Clique aqui para resetar senha</a>"
    };

    nodemailer.transport.sendMail(email,(error,info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log('Email enviado '+info.response);
        }
    });

};

module.exports = {

    async criarToken(request,response){
        const token  = crypto.randomBytes(5).toString('HEX');
        const {email} =  request.query;
        try {
         
        const [{idusuario}] = await connection('usuario').select('idusuario').where('email','=',email);
        console.log(idusuario)

        if (idusuario== null){
            response.json(false)
        }else{
            
            const i = await connection('usuario').where('idusuario','=',idusuario).update({cod:token});
            EnviarEmail(email,token);           
            response.json(true);
        }

        } catch (error) {
            console.log('Error: FilmesSeriesController: create: ' + error);
            
            response.json(false)
        }
       
        
    }, 

     async resetarSenha (request,response){
        const {senha,token} = request.query;
       
        try {
            const bool = await connection('usuario').where('cod','=',token).update({senha:senha});
        if(bool == 1){
            response.json(true);
        }else{
            response.json(false);
        }
            
        } catch (error) {
            console.log("Erro:"+error)
            response.json(false);
            
        }
        

    }
}