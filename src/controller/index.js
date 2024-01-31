const { loginUsuario } = require('./loginController');
const { usuarioController } = require('./userController');
const categoriesController = require('./categoriesControler');
const postController = require('./postController');

module.exports = {
  loginUsuario,
  usuarioController,
  categoriesController,
  postController,
};