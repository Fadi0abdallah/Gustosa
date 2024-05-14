const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, image, callback) => {
        callback(null, 'image');
    },
    filename: (req, image, callback) => {
        console.log(req.body)
        const name = image.originalname.split(' ').join('_');
        const subStrings = name.split('.')
        subStrings.pop()
        let newFileName = subStrings.join('_');
        const extension = MIME_TYPES[image.mimetype];
        callback(null, newFileName + '_' + req.body.name + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).single('image');