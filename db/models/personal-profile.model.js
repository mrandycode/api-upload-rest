const { Model, DataTypes, Sequelize } = require('sequelize');
const PERSONAL_PROFILE_TABLE = 'personal_profiles';

const PersonalProfileSchema = {
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

class PersonalProfile extends Model {
  
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSONAL_PROFILE_TABLE,
            modelName: 'PersonalProfile',
            timestamps: true
        }
    }
}

module.exports = {
    PERSONAL_PROFILE_TABLE,
    PersonalProfileSchema,
    PersonalProfile
}
