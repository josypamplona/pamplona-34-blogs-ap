module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define(
      "BlogPost",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "user_id",
          references: {
            model: "users",
            key: "id",
          },
        },
        published: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updated: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: "blog_posts",
        underscored: true,
      }
    );
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      
      BlogPost.associate = (models) => {
        BlogPost.belongsToMany(models.Category, {
          through: "PostCategory",
          as: "categories",
          foreignKey: "postId",
          otherKey: "categoryId",
        });
      };
    };
  
    return BlogPost;
  };