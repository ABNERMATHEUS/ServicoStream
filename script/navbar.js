$(document).ready(function() {
    
    
if(!localStorage.getItem('user')){
    
    $('#nav').append(`<ul class=" right hide-on-med-and-down "> <button data-target="modal1" class="btn modal-trigger">Entrar</button>    <button data-target="modal2" class="btn modal-trigger teal darken-4 ">Registrar-se</button>   <!-- <a data-target="modal1" class="waves-effect waves-light btn black-text btn modal-trigger" ><i class="material-icons left ">person</i>Entrar</a>-->  </ul>`);
}else{
    $('#nav').append(` <a class='transparent dropdown-trigger btn right' href='#' data-target='dropdown1'><i class="teal-text material-icons">list</i></a>
    <ul id='dropdown1' class='black dropdown-content'>
    <li><a href="gerenciadorDeFilmes.html"><i class="material-icons">account_circle</i>Perfil</a></a></li>
    <li><a href="favoritos.html"><i class="material-icons">favorite</i>Favoritos</a></a></li>
    <li><a id="sair"><i class="material-icons">exit_to_app</i>Sair</a></li>
  </ul>   `)

  $('#mobile-demo').append(`
  <li> <button data-target="modal1" class="btn modal-trigger">Entrar</button>
  </li>
  <li> <button data-target="modal2" class="btn modal-trigger teal darken-4 ">Registrar-se</button></li>
  <li><a href="sass.html">Sass</a></li>
  <li><a href="badges.html">Components</a></li>
  `)
}

$("#sair").click(function(){
    localStorage.clear();
    location.reload();
});

$('.dropdown-trigger').dropdown({
    hover:true,
    constrainWidth: true,
});



    
    
})
