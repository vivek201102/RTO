const router = require('express').Router();
const officer_controller = require('../controllers/officer.js');

router.post('/insert', officer_controller.registerOfficer);
router.post('/login', officer_controller.authOfficer);



module.exports = router;