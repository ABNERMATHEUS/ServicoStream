$(document).ready(function() {

    $("#email").keyup(verificarLogin);
    $("#password").keyup(verificarLogin);
    
    $("#botao").click(function(){
       
        Login();
    });
    


})

function verificarLogin(){


    var email = $("#email").val();
    var password = $("#password").val();   
   

    if(email != null && email != "" && password != "" && password != null ){
        $("#botao").prop("disabled",false);
    }
    else { 
        $("#botao").prop("disabled",true);
    }
}

function  Login(){
    var email=  $("#email").val();
    var senha = $("#password").val();

    var senhaHash =$.MD5(senha);
    alert(email+senha)
    

let data= {};
data.tipo = tipo;
data.titulo = titulo;
data.descricao = descricao;
data.cartaz = cartaz;

   
    $.ajax({
        data:{
            email:email,
            senha:senha
        },
        dataType:'json',
        type:'GET',
        url: 'http://localhost:3333/user/valida',
        success: function(response){

           alert(response.status)
            
        },
        error:function(response){
            alert(response.status)
        }
    })
}

