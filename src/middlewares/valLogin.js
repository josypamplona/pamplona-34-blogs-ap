const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
const validaLoginP = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  validaLoginP,
};
