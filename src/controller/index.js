const { loginUsuario } = require('./loginController');
const { usuarioController, todosOsUsuariosController } = require('./userController');
const { categoriesController } = require('./categoriesController');
const postController = require('./postController');

module.exports = {
  loginUsuario,
  usuarioController,
  todosOsUsuariosController,
  categoriesController,
  postController,
};