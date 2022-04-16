const { PersonalProfile, PersonalProfileSchema } = require('./personal-profile.model');
const { PetProfile, PetProfileSchema } = require('./pet-profile.model');
const { ArticleProfile, ArticleProfileSchema } = require('./article-profile.model');

function setupModels(sequelize) {
    PersonalProfile.init(PersonalProfileSchema, PersonalProfile.config(sequelize));
    PetProfile.init(PetProfileSchema, PetProfile.config(sequelize));
    ArticleProfile.init(ArticleProfileSchema, ArticleProfile.config(sequelize));

    // PersonalProfile.associate(sequelize.models);
}

module.exports = setupModels;