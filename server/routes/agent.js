const router = require('express').Router();
const agent_controller = require('../controllers/agent.js');

router.post('/register', agent_controller.register);
router.post('/login', agent_controller.authentication);
router.get('/:id', agent_controller.getAgentData);


module.exports = router;