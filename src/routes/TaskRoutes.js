const express =  require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create)

/*router.get('/:id', TaskController.show);*/

module.exports = router;
