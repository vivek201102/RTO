const router = require('express').Router();
const vehicle_controller = require('../controllers/specialNumber');

router.post('/checkNo', vehicle_controller.findByNumber);
router.post('/addNumber', vehicle_controller.addNumber);


module.exports = router;