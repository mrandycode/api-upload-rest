const multer = require('multer');
const path = require('path');
const { v4: uuidv5 } = require('uuid');

let uuid = '';
let uuidToSave = 'asdasd';

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb) => {
        uuid = uuidv5() + path.extname(file.originalname).toLowerCase();
        cb(null, uuid);
    },

});

const upload = multer({
    storage,
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            uuidToSave = uuid;
            return cb(null, 'Archivo subido exitosamente: ' + uuid, uuid);
        } else {
            return cb('Error: The File is not valid image', false);
        }
    },

}).single('image');

module.exports = { upload, uuidToSave};
