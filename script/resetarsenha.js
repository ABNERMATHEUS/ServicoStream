$(document).ready(function(){
    
    
    $('.button').click(function(){
        ResetarSenha();
    });
});

function ResetarSenha(){
    var senha = $('.senha').val();
    var senhaConfirmar = $('.senha2').val();
    var url = window.location.search.replace("?","");
    
    var token = url.split('token=')[1].replace(',' , '');

    if(senha == "" || senha == null){
        $('.erro').html('<span class="erro red-text .center-align animated fadeInUp slow">Os dois campos não devem ser vazio</span>')
    }

    else if(senha == senhaConfirmar){
        $('.erro').html('');
        $.ajax({
            url:'http://localhost:3333/reset?senha='+senha+'&token='+token , 
            type:'POST',
            success:function(response){
                if(response==true){
                    window.location.href="/ServicoStream/page/resetarsenhaSucesso.html"
                }else{
                    $('.erro').html('<span class="erro red-text .center-align animated fadeInUp slow">Por favor entre novamente no email</span>')
                }
            }
                        
        })

    }else{
        $('.erro').html('<span class="erro red-text .center-align animated fadeInUp slow">Os dois campos devem ser iguais</span>')
    }

}