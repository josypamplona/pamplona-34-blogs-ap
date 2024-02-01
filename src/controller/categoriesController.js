const { categoriaService, todasAsCategoriasService } = require('../service/categoriaService');

const categoriesController = async (req, res) => {
  const { name } = req.body;
  const novaCategoria = await categoriaService(name);
  
  return res.status(201).json(novaCategoria);
};

const todasAsCategoriasControler = async (req, res) => {
  const categories = await todasAsCategoriasService();

  res.status(200).json(categories);
};

module.exports = {
  categoriesController,
  todasAsCategoriasControler,
};