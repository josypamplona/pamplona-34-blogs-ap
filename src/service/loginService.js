const { User } = require('../models');

const loginService = async (email) => {
  const resultadoEmail = await User.findOne({
    attributes: ['email', 'password'],
    where: { email },
  });
  if (!resultadoEmail) return { status: 400, message: 'Invalid fields' };

  return { status: 200, message: resultadoEmail };
};

module.exports = {
  loginService,
};