const { Model, DataTypes, Sequelize } = require('sequelize');
const ARTICLE_PROFILE_TABLE = 'article_profiles';

const ArticleProfileSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING(4),
    },
    image: {
        type: DataTypes.STRING
    },
   
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
    }
}

class ArticleProfile extends Model {
  
    static config(sequelize) {
        return {
            sequelize,
            tableName: ARTICLE_PROFILE_TABLE,
            modelName: 'ArticleProfile',
            timestamps: true
        }
    }
}

module.exports = {
    ARTICLE_PROFILE_TABLE,
    ArticleProfileSchema,
    ArticleProfile
}
