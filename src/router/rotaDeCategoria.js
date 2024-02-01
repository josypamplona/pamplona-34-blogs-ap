const express = require('express'); /// bliblioteca express
const { valCategories } = require('../middlewares/valCategories');
const { validadorDeToken } = require('../utils/token');

const rotaDeCategorias = express.Router(); /// criando umrotiadoreonomeando emcontnte
const { categoriesController } = require('../controller/index');

rotaDeCategorias.post('/', validadorDeToken, valCategories, categoriesController); // utilizando esse roteador

module.exports = {
  rotaDeCategorias,
}; // se abre a chave tem que abrir chave na exportação