

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
    
     
    
    let data = {}
    data.email = email
    data.senha =senhaHash

   
    $.ajax({
        data: data,
        dataType:'json',
        type:'GET',
        url: 'https://mojal.herokuapp.com/user/valida',
        success: function(response){
            if(response.status!= true){
                $('.erro').html('<center id="erro" class="erro red-text animated fadeInDown slow">Senha ou e-mail incorretos</center>')

            }else{
                
                $('.erro').html('<center id="erro" class="erro red-text animated fadeInDown slow"></center>')
               
               
               if(response.adm == true){
                    localStorage.setItem('user',response.id); //define qual usuario é 
                   window.location.href="https://mojal.netlify.app/page/gerenciadordefilmes?token="+response.cod;
               }else{
                localStorage.setItem('user',response.id); //define qual usuario é 
                location.reload();
            }

            }
           
            
        },
        error:function(response){
            $('.erro').html('<center id="erro" class="erro red-text animated fadeInDown slow">Estamos com problemas técnicos, tente mais tarde</center>')

        }
    })
}

