$(document).ready(function() {
    $('.sidenav').sidenav({
        draggable: true,
    });
    $('.carousel').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 150,
    });
    $('.modal').modal({
        opacity: 0.9
    });
    $('.scrollspy').scrollSpy();
    autoplay()
   

    $.ajax({
        dataType:'json',
        type:'GET',
        url: 'http://localhost:3333/adicionadosRecentemente/listar',
        success: function(response){

            let arrayFilmesSeries = [];
            arrayFilmesSeries = response.response;
            
            arrayFilmesSeries.forEach(function(obj) {

                let cartaz=`<div class="col  s6 l2">
                                <div class="card-content white-text">
                                    <a href="/ServicoStream/page/information.html?id=` + obj.idFilmeSerie + `"><img class="responsive-img" src=`+obj.cartaz+`></img></a>
                                </div>
                            </div>`;

                $("#listFilmesSeries").append(cartaz);

            });
            
        },
        error:function(response){
            
        }
    });

    $('.datepicker').datepicker({
        format: 'dd/mm//yyyy'
    });
              

});





function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
