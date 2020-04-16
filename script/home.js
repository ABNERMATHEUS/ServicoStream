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
    }
        
    );
    $('.scrollspy').scrollSpy();
    


    
    // CAROUSEL


    autoplay()
    $('.dropdown-trigger').dropdown({
        hover:true,
        constrainWidth: true,
        
      
        
      
    });

    
   


   /* $(document).scroll(function(){
        var windowTop = $(window).scrollTop();
        if(windowTop>50){
            $('#nav').addClass('efect-nav');
        }
        else{
            $('#nav').removeClass('efect-nav');
        }
    })*/
   
    





});



function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
