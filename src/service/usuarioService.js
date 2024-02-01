const { criaToken } = require('../utils/token');
const { User } = require('../models');

const userService = async (userData) => {
  const seUsuarioExiste = await User.findOne({ where: { email: userData.email } });

  if (seUsuarioExiste) {
    return { status: 409, message: 'User already registered' };
  }

  const novoUsuario = await User.create(userData);

  const payload = {
    id: novoUsuario.id,
    displayName: novoUsuario.displayName,
    email: novoUsuario.email,
  };

  const token = criaToken(payload);
  return { status: 201, token };
};

const todosOsUsuariosService = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return users;
};
const usuarioPorIdService = async (id) => {
  const users = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!users) return { status: 404, message: { message: 'User does not exist' } };
  return { status: 200, message: users };
};

module.exports = { 
  userService,
  todosOsUsuariosService,
  usuarioPorIdService,
};