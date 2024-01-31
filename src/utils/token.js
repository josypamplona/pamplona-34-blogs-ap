const jwt = require('jsonwebtoken');

const GERA_TOKEN = process.env.JWT_SECRET || 'seusecretdetoken';

// const config = {
//   expiresIn: '7d',
//   alg: 'HS256',
// };

const criaToken = (payload) => { 
  try {
    return jwt.sign(payload, GERA_TOKEN);
  } catch (error) {
    return Error('token não encontrado');
  }
};

const validadorDeToken = (req, res, next) => {
  const autorizaToken = req.headers.authorization;
  if (!autorizaToken) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const token = autorizaToken.split('Bearer ')[1];
    const payload = jwt.verificaToken(token);

    req.user = payload.id; // obs
    next();
  } catch (err) {
    return res.status(401).json({ 
      message: 'Expired or invalid token',
    });
  }
};
module.exports = {
  criaToken,
  validadorDeToken,
};