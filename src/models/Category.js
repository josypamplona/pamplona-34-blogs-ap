module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'categories',
  });
  Category.associate = (models) => {
    Category.belongsTo(models.BlogPost, {
      through: models.PostCategory,
      as: "blogPosts",
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };

  Category.associate = (models) => {
    Category.belongsToMany(models.BlogPost, {
      through: "PostCategory",
      as: "blogPosts",
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };

  return Category;
};