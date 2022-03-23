const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
// const constants = require('../shared/constants');

class UploadImageService {
    constructor() { }

    // async find() {
    //     const personalProfiles = await models.PersonalProfile.findAll({
    //         include: [...constants.PERSONAL_PROFILE]

    //     });
    //     return personalProfiles;
    // }

    async findOne(id, modelName) {
        const personalProfile = await models[modelName].findByPk(id, {
            // include: [...constants.PERSONAL_PROFILE]
        });
        if (!personalProfile) {
            throw boom.notFound('Profile not found');
        }
        return personalProfile;
    }

    async create(data, modelName) {

        // const profile = await this.findOne(data.id);
        // if (!profile) {
        const newPersonalProfile = await models[modelName].create(data);
        return newPersonalProfile;
        // }
    }

    async update(request, modelName) {
        const personalProfile = await this.findOne(request['id'], modelName);
        if (personalProfile) {
            const response = await models[modelName].update(request,
                { where: { id: request.id } });
            return response;
        } else {
            return [0]
        }
    }

    // async delete(id) {
    //     const personalProfile = await this.findOne(id);
    //     await personalProfile.destroy();
    //     return { response: true };
    // }
}
module.exports = UploadImageService;