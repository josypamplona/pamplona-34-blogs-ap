const express = require('express');
// const { User } = require('./models');

// const main = async () => {
//   const users = await User.findAll();
//   console.log(JSON.stringify(users));
// };
// main();

const app = express();
// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.use(express.json());

// const { userController, 
//   postController, 
//   loginController, 
//   categoriesController } = require('./controller/index');

// const erroQuinhentos = require('./middlewares/InternalServerErrorQuinhentos');

// app.use('/login', rotaDeLogin);
// app.use('/user', rotadeCategoria);
// app.use('/categories', rotaDeUsuario);
// app.use('/post', rotasPost);
// app.use(erroQuinhentos);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
