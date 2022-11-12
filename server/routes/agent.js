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
router.post('/uploaddoc',fileUpload.array("files",3),agent_controller.uploadDocument);
router.get('/drivingschool', agent_controller.getApplication);
router.post('/changestatus/approve', agent_controller.approveAgent);
router.post('/changestatus/reject', agent_controller.rejectAgent);
router.post('/checkAgent', agent_controller.getAgentInfo);
// router.get('/:id', agent_controller.getAgentData);


module.exports = router;