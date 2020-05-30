
const favoritos = {

    inti: function() {
        
        favoritos.listarFavoritos();
        
    },


    listarFavoritos: function() {

        const user = localStorage.getItem('user');

        $.ajax({
            dataType:'json',
            data: {
                usuario: user,
                filtrarFavoritos: true
            },
            type:'GET',
            url: 'https://mojal.herokuapp.com/filmesSeries/listar',
            success: function(response){

                let arrayFilmesSeries = [];
                arrayFilmesSeries = response.response;
                
                arrayFilmesSeries.forEach(function(obj) {
                    let filme = `<div class="cartaz" style='background-image: url(` + obj.cartaz + `);'>
                                    <a href="/ServicoStream/page/information.html?id=` + obj.idFilmeSerie + `">
                                    <div class="cartaz-descricao">
                                        <i class="material-icons icon-play">play_arrow</i>
                                    </div>
                                    </a>
                                </div>`;
                    $("#container").append(filme);
                });

            },
            error:function(response){
                
            }
        });

    }

}   

$(function() {
    favoritos.inti();
});