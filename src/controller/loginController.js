const { loginService } = require('../service');
const { criaToken } = require('../utils/token');
  
const loginUsuario = async (req, res) => {
  const { email } = req.body;
  const user = await loginService.loginService(email);
  if (user.status === 400) return res.status(user.status).json({ message: user.message }); 
  const token = criaToken(user.message.dataValues.email);
  return res.status(user.status).json({ token });
};
  
module.exports = {
  loginUsuario,
};
