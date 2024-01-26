'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id:
      {
      allowNull: false,
      autoIncrement: true, 
      primaryKey: true, 
      type: Sequelize.INTEGER,
      },
      displayName:
      {
      allowNull: false,
      type: Sequelize.STRING,
      field: 'display_name',
      unique:true,
      },
      email:
      {
      allowNull: false,
      type: Sequelize.STRING,
      unique:true,
      },
      password:
      {
      allowNull: false,
      type: Sequelize.STRING,
      },
      image:
      {
      allowNull: false,
      type: Sequelize.STRING,
      },
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
  }
};
