const { loginService } = require('../service');
const fileToken = require('../utils/token');
  
const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService.loginService(email, password);
  if (user.status >= 400) return res.status(user.status).json({ message: user.message }); 
  const token = fileToken.criaToken(user.message);
  
  return res.status(user.status).json(token);
};
  
module.exports = {
  loginUsuario,
};
