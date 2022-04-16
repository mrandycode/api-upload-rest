const { Model, DataTypes, Sequelize } = require('sequelize');
const PET_PROFILE_TABLE = 'pet_profiles';

const PetProfileSchema = {
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

class PetProfile extends Model {
  
    static config(sequelize) {
        return {
            sequelize,
            tableName: PET_PROFILE_TABLE,
            modelName: 'PetProfile',
            timestamps: true
        }
    }
}

module.exports = {
    PET_PROFILE_TABLE,
    PetProfileSchema,
    PetProfile
}
