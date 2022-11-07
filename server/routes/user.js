const router = require('express').Router();
const user_controller = require('../controllers/user.js');

router.post('/register', user_controller.register);
// router.post('/login', user_controller.authentication);
// router.get('/:id', user_controller.getUserData);


module.exports = router;    