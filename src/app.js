const express = require('express');
const { rotaDeLogin, rotaDeUsuario } = require('./router/index');

const app = express();
// não remova ou mova esse endpoint
app.use(express.json());
app.get('/', (_request, response) => {
  response.send();
});

// const erroQuinhentos = require('./middlewares/InternalServerErrorQuinhentos');

app.use('/login', rotaDeLogin);
app.use('/user', rotaDeUsuario);
// app.use('/categories', rotaDeCategoria);
// app.use('/post', rotaPost);
// app.use(erroQuinhentos);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
