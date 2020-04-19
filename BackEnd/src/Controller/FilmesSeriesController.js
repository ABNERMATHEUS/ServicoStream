const connection = require('../database/connection');
const crypto  = require('crypto');


module.exports = {

    async create (request,response) {

        const res = {
            status: "",
            response: ""
        };

        try {

            const data = JSON.stringify(request.body);
            console.log(data);
            const {tipo, titulo,direcao,
                elenco,
                genero,
                ano_lancamento,
                duracao, descricao, cartaz} = JSON.parse(data);
            let state = 1;

            const registry = await connection('filmeSerie').insert({
                tipo,
                titulo,
                direcao,
                elenco,
                genero,
                ano_lancamento,
                duracao,
                descricao,
                state,
                cartaz
            });

            res.response = await connection('filmeSerie').select().where('idFilmeSerie', '=', registry);
            res.status = "success";

        } 
        catch(e) {
            console.log('Error: FilmesSeriesController: create: ' + e);
            res.status = "error";
        } 
        finally {
            response.json(res);
        }

    },


    async update (request,response) {

        const res = {
            status: "",
            response: ""
        };

        try {

            const data = request.body;
            const {id, filmeSerie } = JSON.parse(data.data);



            const tipo = filmeSerie.tipo;
            const titulo = filmeSerie.titulo;
            const direcao = filmeSerie.direcao;
            const elenco = filmeSerie.elenco;
            const genero = filmeSerie.genero;
            const ano_lancamento = filmeSerie.ano_lancamento;
            const duracao = filmeSerie.duracao;
            const descricao = filmeSerie.descricao;
            const cartaz = filmeSerie.cartaz;

            const registry = await connection('filmeSerie').update({
                tipo,
                titulo,
                direcao,
                elenco,
                genero,
                ano_lancamento,
                duracao,
                descricao,
                cartaz
            }).where('idFilmeSerie', '=', id);

            res.response = await connection('filmeSerie').select().where('idFilmeSerie', '=', registry);
            res.status = "success";

        } 
        catch(e) {
            console.log('Error: FilmesSeriesController: update: ' + e);
            res.status = "error";
        } 
        finally {
            response.json(res);
        }

    },


    async exclude (request,response) {
        
        const res = {
            status: "",
            response: ""
        };

        try {

            const data = JSON.stringify(request.body);
            const {idFilmeSerie} = JSON.parse(data);

            await connection('filmeSerie').update('state', 0).where('idFilmeSerie', '=', idFilmeSerie);
            
            
            res.response = "Registro deletado com sucesso";
            res.status = "success";

        } 
        catch(e) {
            console.log('Error: FilmesSeriesController: exclude: ' + e);
            res.status = "error";
        } 
        finally {
            response.json(res);
        }

    },


    async list (request,response) {

        const res = {status: ""};

        try {

            res.response = await connection('filmeSerie').select().where('state', '=', 1);
            res.status = "success";
            
        } 
        catch(e) {
            console.log('Error: FilmesSeriesController: list: ' + e);
            res.status = "error";
        } 
        finally {
            response.json(res);
        }

    },

    async getInfomation (request,response) {

        const res = {status: ""};

        const {idFilmeSerie} = request.query;
        console.log(request);

        try {

            res.response = await connection('filmeSerie').select().where('idFilmeSerie', '=', idFilmeSerie);
            res.status = "success";
            
        } 
        catch(e) {
            console.log('Error: FilmesSeriesController: list: ' + e);
            res.status = "error";
        } 
        finally {
            response.json(res);
        }

    },

    async getCartaz (request,response) {

        const {id} = request.query;
        const res = {status: ""};

        try {

            res.response = await connection('filmeSerie').select().where('idFilmeSerie', '=', id);
            res.status = "success";
            
        } 
        catch(e) {
            console.log('Error: FilmesSeriesController: list: ' + e);
            res.status = "error";
        } 
        finally {
            response.json(res);
        }

    },


}