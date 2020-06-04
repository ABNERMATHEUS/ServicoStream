$(document).ready(function() {
    
    
if(!localStorage.getItem('user')){
    
    $('#nav').append(`<ul class=" right hide-on-med-and-down "> <button data-target="modal1" class="btn modal-trigger">Entrar</button>    <button data-target="modal2" class="btn modal-trigger teal darken-4 ">Registrar-se</button>   <!-- <a data-target="modal1" class="waves-effect waves-light btn black-text btn modal-trigger" ><i class="material-icons left ">person</i>Entrar</a>-->  </ul>`);
}else{
    $('#nav').append(` 
    <a class='transparent dropdown-trigger btn right' href='#' data-target='dropdown1'><i class="teal-text material-icons">list</i></a>
    <a class="waves-effect waves-light modal-trigger right" href="#modalSearch"><i class="teal-text material-icons">search</i></a>
    <ul id='dropdown1' class='black dropdown-content'>
    <li><a href="/gerenciadorDeFilmes.html"><i class="material-icons">account_circle</i>Perfil</a></a></li>
    <li><a href="/favoritos.html"><i class="material-icons">favorite</i>Favoritos</a></a></li>
    <li><a id="sair"><i class="material-icons">exit_to_app</i>Sair</a></li>
  </ul>`)

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


$('body').append(modalSearch);
$("#btn-pesquisar").click(function(){

    let titulo = $("#search-titulo").val();
    let genero = $("#search-genero").val();
    let ano = $("#search-ano").val();
    let url = "/home.html?";

    if(titulo)
        url += "&titulo=" + titulo;

    if(genero)
        url += "&genero=" + genero;

    if(ano)
        url += "&ano=" + ano;

    location.href = url;

});
    
    
});

const modalSearch = `
    <div id="modalSearch" class="modal open" tabindex="0" style="z-index: 1003; top: 10%; transform: scaleX(1) scaleY(1); background-color: transparent; box-shadow: none; opacity: 1;">
        <div class="container" style="padding: 50px; background-color: #484d5d; border-radius: 5px; background-image: url(https://pasteboard.co/css/../images/bg.png); padding-bottom: 15px;">
            <input id="search-titulo" placeholder="Pesquisar titulo" style="color: white;" />

            <input id="search-genero" placeholder="Gênero" style="width: 40%; color: white;" /><input id="search-ano" placeholder="Ano" style="color: white; width: 40%;" class="right" />
            <div class="modal-footer" style="background: none;">
                <div class="btn" id="btn-pesquisar">Pesquisar</div>
            </div>
        </div>
    </div>
`;
