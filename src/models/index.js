'use strict';

const fs = require('fs');////nativo para leitura
const path = require('path');////para ajudar as rotas dinamicas
const Sequelize = require('sequelize');/// é so a sequelise
const basename = path.basename(__filename);/// vai usar path das rotas vai pegar somente o nome doarquivoque eu estou
const env = process.env.NODE_ENV || 'development';/// para variaveis de ambiente, que se chama node_env ou development
const config = require(__dirname + '/../config/config.js')[env];/// require de config e acessar as chaves de development 
const db = {};//// cria um objeto chamado db

let sequelize;//// cria uma variavel chamada sequelise
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}////// da 12 a 16 cria uma instancia de sequelaze 

fs
  .readdirSync(__dirname)//// readdirSync vai ler todos os arquivos desse diretorio 
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })///// daqui ele pega com arquivos especificos de com as caracteristicas em parenteses e comfinal js
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });////por forEach ele aessa cada arquivo em cima cria uma model, na linha 25 ele cria umobjeto que cria uma chave que seráonome da model
//// e o valor que vai ser a model
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});/////// da 28 a 32 ele cria as associações 

db.sequelize = sequelize;////objeto sequelise com letra minuscula
db.Sequelize = Sequelize;//// objeto sequelize comeltra maaiuscula

module.exports = db;
