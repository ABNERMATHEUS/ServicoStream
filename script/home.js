$(document).ready(function() {

    jQuery.extend({

        getQueryParameters : function(str) {
            return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
        }
    
    });
    
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
   
    let paramQuery = $.getQueryParameters();
    delete paramQuery[""];

    $.ajax({
        dataType:'json',
        data: {
            paramQuery: JSON.stringify(paramQuery)
        },
        type:'GET',
        url: 'https://mojal.herokuapp.com/filmesSeries/listar',
        crossDomain: true,
        success: function(response){

            let arrayFilmesSeries = [];
            arrayFilmesSeries = response.response;
            
            arrayFilmesSeries.forEach(function(obj) {

                let cartaz=`<div class="col  s6 l2">
                                <div class="card-content white-text">
                                    <a href="page/information.html?id=` + obj.idFilmeSerie + `"><img class="responsive-img" src=`+obj.cartaz+`></img></a>
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
