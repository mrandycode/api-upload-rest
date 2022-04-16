const constants = require('../shared/constants');

function getModelByProfileType(type) {
    let modelName = '';
    if (type === 1) {
        modelName = 'PersonalProfile';
    } else if (type === 2) {
        modelName = 'PetProfile';
    } else {
        modelName = 'ArticleProfile';
    }
    return modelName;
}

// Para usar estos métodos es importante que se mapeen los
// tag

function getErrorByPathOrm(errors, req) {
    errors.map(error => {
        const message = constants.ORM_VALIDATION.find((res) =>
            res.path === error.path
            && res.validatorKey === error.validatorKey);
        return error.message = req.t(message.translateKe);
    });
    return errors;
}

function translateBoom(err, req) {
    err.output.payload.message = req.t(err.output.payload.message.toUpperCase());
    return err;
}

function userTokenValidate(userId, idToken) {
    if (userId != idToken) {
        throw boom.unauthorized('UNAUTHORIZED');
    }
}

module.exports = { getModelByProfileType, getErrorByPathOrm, translateBoom, userTokenValidate }
