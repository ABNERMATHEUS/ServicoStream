const connection = require('../database/connection');
const crypto    = require('crypto');
const nodemailer = require('./Email');

function EnviarEmail(toEmail,cod){

    const url =   'http://127.0.0.1:5500/page/resetarsenha.html?token='+cod;
    email = {
        from: "bdflix2020@gmail.com",
        to: toEmail,
        subject: 'MOJA FILMES',
        text: 'Alterar Senha',
        html: '<h1>RESETAR SENHA</h1><br> <a href='+url+'>Clique aqui</a>'
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

        const [{idusuario}] = await connection('usuario').select('idusuario').where('email','=',email);
       
        if (!idusuario){
            response.json(false)
        }else{
            
            const i = await connection('usuario').where('idusuario','=',idusuario).update({cod:token});
            EnviarEmail(email,token);           
            response.json(true);
        }
    }, 

     async resetarSenha (request,response){
        const {senha,token} = request.query;
        console.log(senha);
        
        const bool = await connection('usuario').where('cod','=',token).update({senha:senha});
        if(bool == 1){
            response.json({ status: true });
        }else{
            response.json({ status: false });
        }

    }
}