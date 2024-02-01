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

module.exports = { 
  userService,
  todosOsUsuariosService,
};