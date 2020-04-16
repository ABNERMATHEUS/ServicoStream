const express = require('express');
const UsuarioController = require('./Controller/Usuario')
const VerificaoController = require('./Controller/VerificacaoController');
const RecuperacaoController = require('./Controller/RecuperacaoController');


const Routes = express.Router();



Routes.post('/user',UsuarioController.create);
Routes.get('/user/valida',UsuarioController.valida);
Routes.get('/valida',VerificaoController.verifica);
Routes.post('/recuperacaosenha',RecuperacaoController.criarToken);
Routes.post('/reset',RecuperacaoController.resetarSenha);








module.exports = Routes; //Linha 4