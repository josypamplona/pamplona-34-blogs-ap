const express = require('express');
const { rotaDeLogin } = require('./router/index');

// const main = async () => {
//   const users = await User.findAll();
//   console.log(JSON.stringify(users));
// };
// main();

const app = express();
// não remova ou mova esse endpoint
app.use(express.json());
app.get('/', (_request, response) => {
  response.send();
});

// const erroQuinhentos = require('./middlewares/InternalServerErrorQuinhentos');

app.use('/login', rotaDeLogin);
// app.use('/user', rotadeCategoria);
// app.use('/categories', rotaDeUsuario);
// app.use('/post', rotasPost);
// app.use(erroQuinhentos);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
