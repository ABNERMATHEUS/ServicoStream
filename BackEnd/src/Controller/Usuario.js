const connection = require('../database/connection');
const nodemailer = require('./Email');
const crypto  = require('crypto');
const jwt = require('jsonwebtoken');


function EnviarEmailVerificao (toEmail,cod){
    const url = 'https://mojal.herokuapp.com/valida?cod='+cod
        
    email = {
        from: "bdflix2020@gmail.com",
        to: toEmail,
        subject: 'E-mail enviado usando Node!',
        text: 'Bem fácil, não? ;)',
        html: '<h1>E-mail de verificação</h1><br> <a href='+url+'>Clique aqui para confirmar</a>'
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
            const [email_cad] = await connection('usuario').select('email').where('email',email);
       
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
                try {
                    EnviarEmailVerificao(email,cod);
                } catch (error) {
                    console.log(error);
                }
                //Encaminhar Email para fazer verificação
    
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
        
        console.log("ID USER  === "+idUser.idusuario );
        if(!idUser){
            response.json({status:false});
        }
        else if(idUser.idusuario == 1) {
            console.log("ID USER2  === "+idUser.idusuario );
            const cod = crypto.randomBytes(5).toString('HEX');
            //const bool = await connection('usuario').where('cod','=',token).update({senha:senha});
            const a = await connection('usuario').where('idusuario','=',idUser.idusuario).update({cod:cod});
            console.log("BANCO="+a);
            response.redirect('https://mojal.netlify.app/page/gerenciadordefilmes?token='+cod);
        }
        else {   
            

              const token = jwt.sign({id:idUser.idusuario},'chaveprivada',{expiresIn: 86400 }); //Criando token / tempo 24hrs:86400;
              response.json({status:true,id:token});
                
            }

    } catch (error) {
        console.log(error);
        response.json({status:false});
    }

    


} 


}