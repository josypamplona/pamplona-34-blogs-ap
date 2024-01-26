const InternalServerErrorQuinhentos = (error, _req, res, _next) => {
  if (error.statusCode) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res.status(500).json({ message: error.message });
};
  
module.exports = InternalServerErrorQuinhentos;