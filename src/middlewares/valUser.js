const User = require('../models/index');

const validaUsuario = async (req, res, next) => {
  const { displayName, email } = req.body;
  if (!email || !displayName) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const result = await User.findOne({
    where: { email },
  });
  if (result) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};
module.exports = {
  validaUsuario,
};