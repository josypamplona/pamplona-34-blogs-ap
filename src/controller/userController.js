const { userService } = require('../service/usuarioService');

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

module.exports = {
  usuarioController,

};
