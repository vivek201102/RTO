const router = require('express').Router();
const officer_controller = require('../controllers/officer.js');

router.post('/register', officer_controller.registerOfficer);
router.post('/login', officer_controller.authOfficer);
router.get('/findbyid/:id', officer_controller.getOfficer);
router.get('/findbyuname/:uname', officer_controller.getUserId);
router.post('/updateuser/:id', officer_controller.updateUserData);
router.post('/updatepass/:id', officer_controller.changePassword);
// router.get('/demo', officer_controller.demo);


module.exports = router;