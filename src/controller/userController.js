const { userService,
  todosOsUsuariosService,
  usuarioPorIdService } = require('../service/usuarioService');

const usuarioController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await userService({
    displayName,
    email,
    password,
    image,
  });
 
  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }

  return res.status(201).json({ token: result.token });
};

async function todosOsUsuariosController(req, res) {
  const users = await todosOsUsuariosService();
  return res.status(200).json(users);
}
const usuarioPorId = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await usuarioPorIdService(id);
  return res.status(status).json(message);
};
module.exports = {
  usuarioController,
  todosOsUsuariosController,
  usuarioPorId,

};
