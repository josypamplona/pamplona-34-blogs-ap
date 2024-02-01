const express = require('express'); /// bliblioteca express
const { validaLoginP } = require('../middlewares/valLogin');

const rotaDeLogin = express.Router(); /// criando umrotiadoreonomeando emcontnte
const {
  loginUsuario,
} = require('../controller/index');

rotaDeLogin.post('/', validaLoginP, loginUsuario); // utilizando esse roteador

module.exports = {
  rotaDeLogin,
}; // se abre a chave tem que abrir chave na exportação