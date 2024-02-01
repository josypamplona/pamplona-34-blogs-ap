const { Category } = require('../models');

const categoriaService = async (name) => {
  const novaCategoria = await Category.create({ name });
  return novaCategoria;
};

module.exports = {
  categoriaService,
};