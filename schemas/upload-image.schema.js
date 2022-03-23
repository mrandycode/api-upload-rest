const Joi = require('joi');

const id = Joi.number().integer();
const country = Joi.string().max(4);
const image = Joi.string().optional().allow('');

const getProfileSchemaById = Joi.object({
    id: id.required()
});

const uploadImagePersonalProfileSchema = Joi.object({
    id: id.required(),
    country: country.required(),
    image
});

module.exports = { getProfileSchemaById, uploadImagePersonalProfileSchema }