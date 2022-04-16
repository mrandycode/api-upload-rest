const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UploadImageService {
    constructor() { }


    async findOne(id, modelName) {
        const personalProfile = await models[modelName].findByPk(id);
        if (!personalProfile) {
            throw boom.notFound('NOT_FOUND');
        }
        return personalProfile;
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