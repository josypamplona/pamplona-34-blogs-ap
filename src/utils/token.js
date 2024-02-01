const jwt = require('jsonwebtoken');

const GERA_TOKEN = process.env.JWT_SECRET || 'seusecretdetoken';

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const criaToken = (payload) => { 
  try {
    return jwt.sign(payload, GERA_TOKEN, config);
  } catch (error) {
    return Error('token não encontrado');
  }
};

const validadorDeToken = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const token = bearerToken.split(' ')[1];
    const payload = jwt.verify(token, GERA_TOKEN, config);
    console.log(bearerToken.split(' '), 'tttttttttt');
    req.user = payload.id; 

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