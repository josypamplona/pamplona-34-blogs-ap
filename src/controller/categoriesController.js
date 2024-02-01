const { categoriaService } = require('../service/categoriaService');

const categoriesController = async (req, res) => {
  const { name } = req.body;
  const novaCategoria = await categoriaService(name);
  
  return res.status(201).json(novaCategoria);
};

module.exports = {
  categoriesController,
};