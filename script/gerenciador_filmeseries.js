

var gerenciar_filmeSeries = {

    init: function() {

        const user = localStorage.getItem('user')
        if(user != 1) {
            location.href = 'https://mojal.netlify.app';
        }

        $("#btn_adicionar").on('click', function() {
            gerenciar_filmeSeries.adicionar();
        });

        $("#btn_alterar").on('click', function() {
            gerenciar_filmeSeries.alterar();
        });

        $("#btn_limpar").on('click', function() {
            gerenciar_filmeSeries.limpar();
        });

        $('#cartaz_base64').on('change', function(element) {
            var file = element.target.files[0];
            var reader = new FileReader();
                reader.onloadend = function() {
                    $("#cartaz_input")[0].style['background-image'] = "url(" + reader.result + ")";
            }
            reader.readAsDataURL(file);
        });

    },

    adicionar: function() {

        let titulo = $('#titulo_input').val();
        let direcao = $('#direcao_input').val();
        let elenco = $('#elenco_input').val();
        let genero = $('#genero_input').val();
        let ano = $('#ano_input').val();
        let duracao = $('#duracao_input').val();
        let tipo = $('#tipo_input').val();
        let descricao = $('#descricao_input').val();
        let cartaz = $("#cartaz_input")[0].style['background-image'].slice(4, -1);
        
        let data= {};
        data.tipo = tipo;

        data.direcao = direcao;
        data.elenco = elenco;
        data.genero = genero;
        data.ano = ano;
        data.duracao = duracao;
        
        data.titulo = titulo;
        data.descricao = descricao;
        data.cartaz = cartaz;

        $.ajax({
            data: data,
            dataType:'json',
            type:'POST',
            url: 'https://mojal.herokuapp.com/filmesSeries/inserir',
            success: function(response){
                
                gerenciar_filmeSeries.listar();
                gerenciar_filmeSeries.limpar();
                
            },
            error:function(response){
                
            }
        });
    },

    alterar: function() {

        let id = $('#id').val();
        let titulo = $('#titulo_input').val();
        let direcao = $('#direcao_input').val();
        let elenco = $('#elenco_input').val();
        let genero = $('#genero_input').val();
        let ano = $('#ano_input').val();
        let duracao = $('#duracao_input').val();
        let tipo = $('#tipo_input').val();
        let descricao = $('#descricao_input').val();
        let cartaz = $("#cartaz_input")[0].style['background-image'].slice(4, -1);
        
        let data= {};
        data.id = id;
        data.filmeSerie = {
            tipo: tipo,
            titulo: titulo,
            descricao: descricao,
            direcao: direcao,
            elenco: elenco,
            genero: genero,
            ano_lancamento: ano,
            duracao: duracao,
            cartaz: cartaz
        }

        $.ajax({
            data: {
                data: JSON.stringify(data)
            },
            dataType:'json',
            type:'POST',
            url: 'https://mojal.herokuapp.com/filmesSeries/atualizar',
            success: function(response) {
                
                gerenciar_filmeSeries.listar();
                gerenciar_filmeSeries.limpar();
                
            },
            error:function(response){
                console.log(response);
            }
        });
    },

    excluir: function(idFilmeSerie) {

        if(confirm("Tem certeza?")) {
            $.ajax({
                data: {
                    idFilmeSerie: idFilmeSerie
                },
                dataType:'json',
                type:'POST',
                url: 'https://mojal.herokuapp.com/filmesSeries/excluir',
                success: function(response){
                    
                    gerenciar_filmeSeries.listar();
                    gerenciar_filmeSeries.limpar();
                    
                },
                error:function(response){
                    
                }
            });
        }
    },

    listar: function() {

        $('#listFilmesSeries')[0].innerHTML = '';

        $.ajax({
            dataType:'json',
            type:'GET',
            url: 'https://mojal.herokuapp.com/filmesSeries/listar',
            success: function(response){
    
                let arrayFilmesSeries = [];
                arrayFilmesSeries = response.response;
                let tr = ``;
                let tipo = '';
                let status = '';
                
                arrayFilmesSeries.forEach(function(obj) {
                    
                    tipo = obj.tipo == 1 ? `Filme` : `Série`;
                    status = obj.state == 1 ? `Ativo` : `Inativo`;

                    tr = `<tr class="item_table" onclick="gerenciar_filmeSeries.prepareUpdate(this)">
                            <td class="id"         value="` + obj.idFilmeSerie + `" style="display:none"></td>
                            <td class="tipo"       value="` + obj.tipo         + `">` + tipo + `</td>
                            <td class="titulo"     value="` + obj.titulo       + `">` + obj.titulo + `</td>
                            <td class="direcao"    value="` + obj.direcao       + `">` + obj.direcao + `</td>
                            <td class="elenco"     value="` + obj.elenco       + `">` + obj.elenco + `</td>
                            <td class="genero"     value="` + obj.genero       + `">` + obj.genero + `</td>
                            <td class="ano"        value="` + obj.ano_lancamento       + `">` + obj.ano_lancamento + `</td>
                            <td class="duracao"    value="` + obj.duracao       + `">` + obj.duracao + `</td>
                            <td class="descricao"  value="` + obj.descricao    + `">` + obj.descricao + `</td>
                            <td class="status"     value="` + obj.status       + `">` + status + `</td>
                            <td style="text-align: center;"><div onclick="gerenciar_filmeSeries.excluir(`+obj.idFilmeSerie+`)" class="btn">Excluir</div></td>
                        </tr>`;
                    $('#listFilmesSeries').append(tr);
                });
                
            },
            error:function(response){
                
            }
        });

    },

    limpar: function() {
        $('#titulo_input').val("");
        $('#tipo_input').val("");
        $('#direcao_input').val("");
        $('#elenco_input').val("");
        $('#genero_input').val("");
        $('#ano_input').val("");
        $('#duracao_input').val("");
        $('#descricao_input').val("");
        $("#cartaz_input")[0].style['background-image'] = "";
    },

    prepareUpdate: function(elementTr) {
        let id = elementTr.getElementsByClassName('id')[0].getAttribute('value');
        let tipo = elementTr.getElementsByClassName('tipo')[0].getAttribute('value');
        
        let titulo = elementTr.getElementsByClassName('titulo')[0].getAttribute('value');

        let direcao = elementTr.getElementsByClassName('direcao')[0].getAttribute('value');
        let elenco = elementTr.getElementsByClassName('elenco')[0].getAttribute('value');
        let genero = elementTr.getElementsByClassName('genero')[0].getAttribute('value');
        let ano = elementTr.getElementsByClassName('ano')[0].getAttribute('value');
        let duracao = elementTr.getElementsByClassName('duracao')[0].getAttribute('value');
        
        let descricao = elementTr.getElementsByClassName('descricao')[0].getAttribute('value');
        let cartaz = '';

        $.ajax({
            data: {
                id: id
            },
            dataType:'json',
            type:'GET',
            url: 'https://mojal.herokuapp.com/filmesSeries/getImg',
            success: function(response){
                if(response.response)
                    cartaz = response.response[0].cartaz;
                else 
                    cartaz = "url(https://pasteboard.co/css/../images/splash-image.png)";
            },
            error:function(response){
                
            }
        }).then(function() {
            $('#id').val(id);
            $('#titulo_input').val(titulo);
            $('#direcao_input').val(direcao);
            $('#elenco_input').val(elenco);
            $('#genero_input').val(genero);
            $('#ano_input').val(ano);
            $('#duracao_input').val(duracao);
            $('#tipo_input').val(tipo);
            $('#descricao_input').val(descricao);
            $("#cartaz_input")[0].style['background-image'] = "url("+ cartaz + ")";
        });
    }

}


$(function() {
    gerenciar_filmeSeries.init();
    gerenciar_filmeSeries.listar();
});