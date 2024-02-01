const express = require('express'); /// bliblioteca express
const valCategories = require('../middlewares/valCategories');

const rotaDeCategorias = express.Router(); /// criando umrotiadoreonomeando emcontnte
const categoriaController = require('../controller/index');

rotaDeCategorias.post('/', valCategories, categoriaController); // utilizando esse roteador

module.exports = {
  rotaDeCategorias,
}; // se abre a chave tem que abrir chave na exportação