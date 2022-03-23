const { PersonalProfile, PersonalProfileSchema } = require('./personal-profile.model');

function setupModels(sequelize) {
    PersonalProfile.init(PersonalProfileSchema, PersonalProfile.config(sequelize));

    // PersonalProfile.associate(sequelize.models);
}

module.exports = setupModels;