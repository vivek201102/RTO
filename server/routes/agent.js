const router = require('express').Router();
const agent_controller = require('../controllers/agent.js');
const multer = require("multer");
const path=require("path");

const documentStorage = multer.diskStorage({
    // destination: "./user/document",
    destination:(req, file, cb)=> {
      cb(null, "./document/agent")
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

router.post('/register', agent_controller.register);
router.post('/login', agent_controller.authentication);
router.get('/:id', agent_controller.getAgentData);
router.post('/uploaddoc',fileUpload.array("files",3),agent_controller.uploadDocument);


module.exports = router;