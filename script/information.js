$(document).ready(function(){
    buscarFilme("Spider-Man: Into the Spider-Verse");
});

function buscarFilme(nomeFilme){

    $.ajax({
        dataType:'json',
        type:'POST',        
        url:'http://www.omdbapi.com/?apikey=f03d4d22&t='+nomeFilme,
        success: function (response){
            
            $("#titulo").html("<h2 class='white-text left -align' id='titulo'>"+response.Title+"</h2>")
            $("#descricao").html(" <li id='descricao' class='collection-item black white-text'>"+response.Plot+" </li>")
            $("#direcao").html("  <li id='direcao'>"+"• "+ response.Director+"</li>");

            $("#genero").html("  <li id='genero'>"+"• "+ response.Genre+"</li>");
            $("#ano").html("  <li id='ano'>"+"• "+ response.Released+"</li>");           
            $("#duracao").html("  <li id='duracao'>"+"• "+ response.Runtime+"</li>");
            $("#img-information").prop("src",response.Poster);
            $("#atores").html("  <li id='atores'>"+"• "+ response.Actors+"</li>");
           

            

        }
    })

}

