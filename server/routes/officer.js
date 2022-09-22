const router = require('express').Router();
const officer_controller = require('../controllers/officer.js');

router.post('/insert', officer_controller.registerOfficer);

// router.post('/login', officer_controller.authOfficer);

// router.get('/:id', officer_controller.getOfficer);

module.exports = router;