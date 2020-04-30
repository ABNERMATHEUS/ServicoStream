$(document).ready(function(){
    //buscarFilme("Spider-Man: Into the Spider-Verse");
    information.listar();


    $('#button_filme').click(function(){
      
        if(!localStorage.getItem('user')){
            alert("Não liberado")
        }else{
            alert('usuario Liberado')
        }
    });

    $('.favorite').click(function() {
        information.favorite()
    });
    
});

var information = {

    favorite: function(){

        $('.favorite').html('<i class="favorite medium material-icons white-text right">favorite</i>');
        
    },

    listar: function() {

        let idFilmeSerie = location.search.replace(/[?/id=]/g, '');

        $.ajax({
            data: {
                idFilmeSerie: idFilmeSerie   
            },
            dataType:'json',
            type:'GET',
            url: 'http://localhost:3333/filmesSeries/information',
            success: function(response){
    
                let arrayFilmesSeries = [];
                arrayFilmesSeries = response.response;
                
                arrayFilmesSeries.forEach(function(obj) {

                    console.log(obj);
                    
                    $("#titulo").html("<h2 class='white-text left -align' id='titulo'>"+obj.titulo+"</h2>")
                    $("#descricao").html(" <li id='descricao' class='collection-item black white-text'>"+obj.descricao+" </li>")
                    $("#direcao").html("  <li id='direcao'>"+"• "+ obj.direcao+"</li>");

                    $("#genero").html("  <li id='genero'>"+"• "+ obj.genero+"</li>");
                    $("#ano").html("  <li id='ano'>"+"• "+ obj.ano_lancamento+"</li>");           
                    $("#duracao").html("  <li id='duracao'>"+"• "+ obj.duracao+"</li>");
                    $("#img-information").prop("src", obj.cartaz.replace(/"/g, ''));
                    $("#atores").html("  <li id='atores'>"+"• "+ obj.elenco+"</li>");

                });
                
            },
            error:function(response){
                
            }
        });

    }

}

function buscarFilme(nomeFilme){

    $.ajax({
        dataType:'json',
        type:'POST',        
        url:'http://www.omdbapi.com/?apikey=f03d4d22&t='+nomeFilme,
        success: function (response){
            
            
           

            

        }
    })

}

