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
        url: 'http://localhost:3333/recuperacaosenha?email='+emailUsuario,
        success:function(response){
            if(response == true){
                window.location.href="/ServicoStream/page/senhaSucesso.html"
            }else{
                $('.erro').html('<span class="erro red-text .center-align animated fadeInUp slow">E-mail inválido</span>')
            }
        }
    })



}

