$(document).ready(function(){
    //buscarFilme("Spider-Man: Into the Spider-Verse");
    information.listar();
    
    $('.modal').modal({
        opacity: 0.9
    });


    $('#button_filme').click(function(){
      
        if(!localStorage.getItem('user')){
            alert("Não liberado")
        }else{
            alert('usuario Liberado')
        }
    });

    if(localStorage.getItem('user')!=null){
        $('#favorite').append(`<i class="medium material-icons white-text right">favorite_border</i>`);
    }


    $('#favorite').click(function() {
        information.favorite()
    });


    
    
});
var favorite = false;
var url = window.location.search.replace("?","");
var idFilme = url.split('id=')[1].replace(",","");
var idUser= localStorage.getItem('user');
var data = {}
data.idFilme = idFilme;
data.idUser = idUser;
/* Usar o data, já ésta como json, isso colocar no ajax*/

var information = {

    
    favorite: function(){

        const user = localStorage.getItem('user');
        const idFilme = location.search.replace(/[?/id=]/g, '');

        if(favorite == false){
        
            $('#favorite').html('<i class="favorite medium material-icons red-text right">favorite</i>');
            favorite = true
            console.log(data);       

            $.ajax({
                dataType:'json',
                data: {
                    idUsuario: user,
                    idFilmeSerie: idFilme
                },
                type:'POST',
                url: 'https://mojal.herokuapp.com/filmesSeries/addFavorito',
                success: function(response){
    
                },
                error:function(response){
                    
                }
            });
         
        }
        else{        
        $('#favorite').html('<i class="favorite medium material-icons white-text right">favorite_border</i>');
         favorite = false;
         console.log(data);

         $.ajax({
            dataType:'json',
            data: {
                idUsuario: user,
                idFilmeSerie: idFilme
            },
            type:'POST',
            url: 'https://mojal.herokuapp.com/filmesSeries/removeFavorito',
            success: function(response){

            },
            error:function(response){
                
            }
        });

    }
    },

    listar: function() {

        let idFilmeSerie = location.search.replace(/[?/id=]/g, '');

        $.ajax({
            data: {
                idFilmeSerie: idFilmeSerie   
            },
            dataType:'json',
            type:'GET',
            url: 'https://mojal.herokuapp.com/filmesSeries/information',
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

                $('#favorite').html('<i class="favorite medium material-icons white-text right">favorite_border</i>');

                const user = localStorage.getItem('user');

                $.ajax({
                    data: {
                        usuario: user,
                        filtrarFavoritos: true
                    },
                    dataType:'json',
                    type:'GET',
                    url: 'https://mojal.herokuapp.com/filmesSeries/listar',
                    success: function(response){
                        if(response.response) {
                            response.response.forEach(function(value) {
                                if(value.idFilmeSerie == idFilmeSerie) {
                                    $('#favorite').html('<i class="favorite medium material-icons red-text right">favorite</i>');
                                    favorite = true;
                                }
                            });
                        }
                    },
                    error: function(responseError) {

                    }});
                
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

