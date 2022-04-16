const express = require('express');
const UploadService = require('../services/upload.service');
const path = require('path');
const router = express.Router();
const service = new UploadService();
const { upload } = require('../middlewares/multer.handler');
const validationHandler = require('../middlewares/validator.handler');
const { checkApiKey, checkRoles } = require('../middlewares/auth.handler');
const utils = require('../shared/utils');
const passport = require('passport');


router.post('/', upload, (req, res) => {
    // console.log(req.file);
    res.send('Uploaded');
});

// Static Files
// Get File
router.use(express.static(path.join(__dirname, '../../salvame-id')));

router.patch('/profile',
    upload,
    passport.authenticate('jwt', { session: false }),
    // validationHandler(uploadImageSchema, 'body'),
    checkApiKey,
    checkRoles('admin', 'customer'),
    async (req, res, next) => {
        const filename = req.file.filename;
        try {
            const body = req.body;
            body.image = filename;
            const modelName = utils.getModelByProfileType(parseInt(body.type,10));
            res.statusMessage = req.t('UPLOAD_IMAGE_SUCCESS');
            res.status(201).json(await service.update(body, modelName));
        } catch (error) {
            next(error);
        }
    }

);

router.get(express.static(path.join(__dirname, '../../salvame-id/images')));

module.exports = router;