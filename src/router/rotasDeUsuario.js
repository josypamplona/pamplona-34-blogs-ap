const express = require('express'); /// bliblioteca express
const { valUser } = require('../middlewares/valUser');
const { validadorDeToken } = require('../utils/token');

const rotaDeUsuario = express.Router(); /// criando umrotiadoreonomeando emcontnte
const {
  usuarioController,
  todosOsUsuariosController,
} = require('../controller/index');

rotaDeUsuario.post('/', valUser, usuarioController); // utilizando esse roteador
rotaDeUsuario.get('/', validadorDeToken, todosOsUsuariosController);
module.exports = {
  rotaDeUsuario,
}; // se abre a chave tem que abrir chave na exportação