$(document).ready(function(){

    $('.button').click(function(){
        EnviarEmail();
    });

});

function EnviarEmail(){

    var emailUsuario = $(".email").val();
    alert(emailUsuario);
    
    

    $.ajax({
        
        type:'POST',
        dataType:'json',
        url: 'http://localhost:3333/recuperacaosenha?email='+emailUsuario,
        success:function(response){
            alert(response);
        }
    })



}

