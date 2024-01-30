const { loginUsuario } = require('./loginController');
const userController = require('./userController');
const categoriesController = require('./categoriesControler');
const postController = require('./postController');

module.exports = {
  loginUsuario,
  userController,
  categoriesController,
  postController,
};