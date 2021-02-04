const express = require('express');
const router = express.Router();
const editController = require('../controllers/edit_controller');


router.post('/add' , editController.addTask);
router.post('/del' , editController.deleteTask);



module.exports = router;