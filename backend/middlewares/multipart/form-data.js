const multer = require('multer');
const path = require('path');

// Configure Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')  // ensure this directory exists
    },
    filename: function (req, file, cb) {
        // Create a unique filename with the original extension
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });
