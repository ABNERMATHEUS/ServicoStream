$(document).ready(function() {

    $('#email2').keyup(verificar);
    $('#name2').keyup(verificar);
    $('#last_name2').keyup(verificar);
    $('#password2_2').keyup(verificar);
    $('#password2Confirm').keyup(verificar);
    $('#password2Confirm').change(verificarSenha);
    $('#password2_2').change(verificarSenha);
  

    $("#botaoCadastro").click(function(){
        var nome = $("#name2").val();
        var sobrenome = $("#last_name2").val();
        var email = $("#email2").val();
        var senha = $("#password2_2").val();
        var confirmasenha = $("#password2Confirm").val();
        var telefone = $("#telefone").val();
        var nascimento = $("#nascimento").val();

        var senhaHash = $.MD5(senha);

        
        fComServidor(nome,sobrenome,email,senhaHash, telefone, nascimento);
       // return false;
	});




});

function verificar (){
    
   var nome = $("#name2").val();
   var sobrenome = $("#last_name2").val();
   var email = $("#email2").val();
   var senha = $("#password2_2").val();
   var confirmasenha = $("#password2Confirm").val();
   //var valid = $("#email").hasClass("validate valid") ;



   if( nome != "" && nome != null && sobrenome != "" && sobrenome!= null && email != "" && email != null && senha != "" && senha!= null && confirmasenha != "" && confirmasenha != null && senha == confirmasenha){
       $("#botaoCadastro").prop("disabled", false);
   }
   else{
       $("#botaoCadastro").prop("disabled",true);
   }

  
    
}


function verificarSenha(){

    var senhaVerifica = $("#password2_2").val();
    var senhaVerificaComfirm = $("#password2Confirm").val();

    if(senhaVerifica != senhaVerificaComfirm){
        $("#password2_2").addClass(" validate white-text invalid");
        $("#password2Confirm").addClass(" validate white-text invalid");
    }
    else{
        $("#password2_2").addClass(" validate white-text valid");
        $("#password2Confirm").addClass(" validate white-text valid");
    }

    
}

function Vazio (campo){
    var email =  $(campo).val();
    if ( email != "" && email != null ){
        return true;
    }
    else {
        return false;
    }
}



//CADASTRO!!!



function fComServidor(nm,lt_nm,em,pass, telefone, nascimento){

    let data = {}
    data.nome = nm
    data.sobrenome = lt_nm
    data.email = em
    data.senha = pass
    data.telefone = telefone
    data.nascimento = nascimento

	$.ajax({
		data: data,
        type: "POST",
        datatype:'json',
        url: 'https://mojal.herokuapp.com/user',
        success: function(response){
            if (response.status != true){
               $('.erro_cad').html('<center id="erro" class="erro_cad red-text animated fadeInDown fast">'+response.msg+'</center>')

            }else{
                window.location.href="https://mojal.netlify.app/page/cadastroSucesso.html" 
            }

        },
        error: function(response){
            $('.erro_cad').html('<center id="erro" class="erro_cad red-text animated fadeInDown fast">'+response.msg+'</center>')
           
        }
        
	   });
} 