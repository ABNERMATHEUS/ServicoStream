const express = require('express');
const UsuarioController = require('./Controller/Usuario')
const VerificaoController = require('./Controller/VerificacaoController');
const RecuperacaoController = require('./Controller/RecuperacaoController');
const FilmesSeriesController = require('./Controller/FilmesSeriesController');


const Routes = express.Router();



Routes.post('/user',UsuarioController.create);
Routes.get('/user/valida',UsuarioController.valida);
Routes.get('/valida',VerificaoController.verifica);
Routes.post('/recuperacaosenha',RecuperacaoController.criarToken);
Routes.post('/reset',RecuperacaoController.resetarSenha);

Routes.post('/filmesSeries/inserir',FilmesSeriesController.create);
Routes.post('/filmesSeries/atualizar',FilmesSeriesController.update);
Routes.post('/filmesSeries/excluir',FilmesSeriesController.exclude);
Routes.post('/filmesSeries/listar',FilmesSeriesController.list);









module.exports = Routes; //Linha 4