const router = require('express').Router();
const user_controller = require('../controllers/user.js');
const multer = require("multer");
const path = require("path")

const documentStorage = multer.diskStorage({
    // destination: "./user/document",
    destination:(req, file, cb)=> {
      cb(null, "./document/user")
    },
    filename:(req, file, cb) =>
    {
      let myfileName = file.fieldname + '_' + Date.now() + path.extname(file.originalname);
      
      cb(null, myfileName)
    }
})

const fileUpload = multer({
    storage: documentStorage,
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|pdf/
      const mimeType = fileTypes.test(file.mimetype)
      const extname = fileTypes.test(path.extname(file.originalname))

      if (mimeType && extname) {
          return cb(null, true)
      }
      cb('Give Proper File Formate To Upload')
    }
}) 


router.post('/uploadDoc', fileUpload.array("files", 4) ,user_controller.uploadDocument);

router.post('/register', user_controller.register);
router.get('/getAll', user_controller.getUserInformation);
router.post('/login', user_controller.getUser);
router.post('/bookslot', user_controller.bookSlot);

module.exports = router;    