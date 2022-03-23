const express = require('express');
const uploadRouter = require('../routes/upload.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api-upload-rest', router);
    router.use('/', uploadRouter);
}

module.exports = routerApi;