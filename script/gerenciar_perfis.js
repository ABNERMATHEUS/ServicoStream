
var gerenciarPerfis = {
    init: function() {
        gerenciarPerfis.listAndMountPerfis();
    },

    listAndMountPerfis: function() {

        $.ajax({
            type: 'POST',
            url: '../backend/routes.php',
            dataType: 'json',
            data: {
                action: 'perfil',
                subaction: 'listar',
                idUsuario: '1'
            },
            success: function(response) {
                response.forEach(function(object, key) {
                    gerenciarPerfis.addCardPerfil(object);
                });
            },
            error: function(error) {
                console.log('error: ' + error);
            }
        });

    },

    addCardPerfil: function(perfil) {
        var x = '<a href="" class="gp-card"><div class="gp-image"></div><label for="">Osvaldo</label></a>';

        var tagA = document.createElement('a');
        tagA.setAttribute('href', '');
        tagA.setAttribute('class', 'gp-card');

        var tagDiv = document.createElement('div');
        tagDiv.setAttribute('class', 'gp-image');

        var tagLabel = document.createElement('label');
        tagLabel.innerHTML = perfil.nomePerfil;

        tagA.appendChild(tagDiv);
        tagA.appendChild(tagLabel);

        $("#gp-list").prepend(tagA);
    }

}

$(function() {
    gerenciarPerfis.init();
})