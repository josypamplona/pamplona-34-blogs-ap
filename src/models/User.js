module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    },
  );

  // User.associate = ({ BlogPost }) => {
  //   User.hasMany(BlogPost, {
  //     as: 'blogPosts',
  //     foreignKey: 'id',
  //   })
  // }
  return User;
};