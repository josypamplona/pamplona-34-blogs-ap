const { Category } = require('../models');

const categoriaService = async (name) => {
  const novaCategoria = await Category.create({ name });
  return novaCategoria;
};
const todasAsCategoriasService = async () => {
  const todasCategorias = await Category.findAll({
    attributes: ['id', 'name'],
  });

  return todasCategorias;
};

module.exports = {
  categoriaService,
  todasAsCategoriasService,
};