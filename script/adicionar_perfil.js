
var adicionarPerfis = {
    
    init: function() {
        $('button').on('click', () => {
            this.adicionarPerfis();
        });
    },

    adicionarPerfis: function() {

        var nome = $("#nome").val();

        $.ajax({
            type: 'POST',
            url: '../backend/routes.php',
            dataType: 'json',
            data: {
                action: 'perfil',
                subaction: 'cadastrar',
                nomePerfil: nome
            },
            success: function(response) {
                window.location.pathname="MOJA/page/gerenciar_perfis.html";
            },
            error: function(error) {
                console.log('error: ' + error);
            }
        });
    }
}


$(function() {
    adicionarPerfis.init();
});