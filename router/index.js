const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/user.controller');

router.post('/addUser', ctrlUser.addUser);
router.delete('/deleteUser', ctrlUser.deleteUser);
router.use('/getUsers',ctrlUser.getUsers)

module.exports = router;