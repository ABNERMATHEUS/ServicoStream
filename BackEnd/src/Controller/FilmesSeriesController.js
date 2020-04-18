const connection = require('../database/connection');
const crypto  = require('crypto');


module.exports = {

    async create (request,response) {

        const res = {
            status: "",
            response: ""
        };

        try {

            const {tipo, titulo, descricao, state, cartaz} = request.body

            const registry = await connection('filmeSerie').insert({
                tipo,
                titulo,
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

            const {idFilmeSerie, filmeSerie } = request.body;

            const tipo = filmeSerie.tipo;
            const titulo = filmeSerie.titulo;
            const descricao = filmeSerie.descricao;
            const state = filmeSerie.state;

            const registry = await connection('filmeSerie').update({
                tipo,
                titulo,
                descricao,
                state
            }).where('idFilmeSerie', '=', idFilmeSerie);

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

            const {idFilmeSerie, inative} = request.body;

            if(inative === false)
                await connection('filmeSerie').delete().where('idFilmeSerie', '=', idFilmeSerie);
            else 
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

            res.response = await connection('filmeSerie').select();
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