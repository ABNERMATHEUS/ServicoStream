$(document).ready(function(){

    $('.button').click(function(){
        EnviarEmail();
    });

});

function EnviarEmail(){

    var emailUsuario = $(".email").val();
    
    $.ajax({
        
        type:'POST',
        dataType:'json',
        url: 'https://mojal.herokuapp.com/recuperacaosenha?email='+emailUsuario,
        success:function(response){
            if(response == true){
                window.location.href="page/senhaSucesso.html"
            }else{
                $('.erro').html('<span class="erro red-text .center-align animated fadeInUp slow">E-mail inválido</span>')
            }
        }
    })
    
}

