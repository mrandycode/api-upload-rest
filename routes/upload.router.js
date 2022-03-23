const express = require('express');
const UploadService = require('../services/upload.service');
const path = require('path');
const { getProfileSchemaById, uploadImagePersonalProfileSchema } = require('../schemas/upload-image.schema');
const router = express.Router();
const service = new UploadService();
const { upload, uuidToSave } = require('../middlewares/multer.handler');

let nameFile = '';
router.post('/', upload, (req, res) => {
    // console.log(req.file);
    res.send('Uploaded');
});

// Static Files
// Get File
router.use(express.static(path.join(__dirname, '../public')));

router.patch('/personal',
    upload,
    // passport.authenticate('jwt', { session: false }),
    // validationHandler(uploadImagePersonalProfileSchema, 'body'),
    // checkApiKey,
    // checkRoles('admin', 'customer'),

    async (req, res, next) => {
        const filename = req.file.filename;
        try {
            const body = req.body;
            body.image = filename;
            res.status(201).json(await service.update(body, 'PersonalProfile'));
        } catch (error) {
            next(error);
        }
    }

);

router.post('/pet',
    // passport.authenticate('jwt', { session: false }),
    // validationHandler(uploadImagePersonalProfileSchema, 'body'),
    // checkApiKey,
    // checkRoles('admin', 'customer'),
    async (req, res, next) => {
        try {
            const body = req.body;
            res.status(201).json(await service.create(body, 'PetProfile'));
        } catch (error) {
            next(error);
        }
    }
);

router.post('/article',
    // passport.authenticate('jwt', { session: false }),
    // validationHandler(uploadImagePersonalProfileSchema, 'body'),
    // checkApiKey,
    // checkRoles('admin', 'customer'),
    async (req, res, next) => {
        try {
            const body = req.body;
            res.status(201).json(await service.create(body, 'ArticleProfile'));
        } catch (error) {
            next(error);
        }
    }
);

router.get(express.static(path.join(__dirname, '/public/uploads')));

module.exports = router;