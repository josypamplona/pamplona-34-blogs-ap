const express = require('express');
const { rotaDeLogin,
  rotadeCategoria,
  rotasPost,
  rotaDeUsuario,
} = require('./router/index');
const { controllers } = require('../src/controller/index');

const erroQuinhentos = require('./middlewares/InternalServerErrorQuinhentos');

const app = express();
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.use(express.json());

app.use('/login', rotaDeLogin, controllers);
app.use('/user', rotadeCategoria, controllers);
app.use('/categories', rotaDeUsuario, controllers);
app.use('/post', rotasPost, controllers);
app.use(erroQuinhentos);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
