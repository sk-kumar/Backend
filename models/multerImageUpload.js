const multer = require('multer');
const uuid = require('uuid').v4;

// Multer 
// Custome file name
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, `${uuid()}-${originalname}`)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new multer.MulterError, false)
    }
}
const upload = multer({ storage, fileFilter, limits: { fileSize: 100000 } });

module.exports = { upload }