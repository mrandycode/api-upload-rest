const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const { v4: uuidv5 } = require('uuid');
const { config } = require('./../config/config');
let uuid = '';
let uuidToSave = '';
const imageFolder = path.join(__dirname, '../../salvame-id/images/');
const sizeFile = config.sizeFile;

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../salvame-id/images'),
    filename: async (req, file, cb) => {
        uuid = uuidv5() + path.extname(file.originalname).toLowerCase();
        // await resizeImage(uuid).catch((e) => { console.log(e) });
        cb(null, uuid);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: sizeFile },
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

async function resizeImage(imageName) {
    const input = 'E:/Andy/Projects/Frank Yeguez/backend/www.salvameid.com/salvame-id/images/' + imageName;
    console.log(input, 'resizeImage');
    sharp(input)
        .resize({ width: 100 })
        .toBuffer()
        .then(data => {
            console.log(data, 'RESIZE');
        });
}

module.exports = { upload, uuidToSave };
