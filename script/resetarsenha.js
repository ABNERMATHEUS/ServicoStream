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

    if(senha == ""){
        $('.erro').html('<span class="erro red-text .center-align animated fadeInUp slow">Os dois campos não devem ser vazio</span>')
    }

    else if(senha == senhaConfirmar){
        $('.erro').html('');
        $.ajax({
            url:'http://localhost:3333/reset?senha='+senha+'&token='+token , 
            type:'POST',
                        
        }).done(function(res) {
            if (res.status) {
            alert(res.status)
        } else {
           alert(res.status)
        }});

        

    }else{
        $('.erro').html('<span class="erro red-text .center-align animated fadeInUp slow">Os dois campos devem ser iguais</span>')
    }

}