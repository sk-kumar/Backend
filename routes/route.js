const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// POST
router.post('/user',userController.createUser);

// GET
router.get('/user/:id',userController.getUser);

// PUT
router.put('/user/:id',userController.updateUser);

// DELETE
router.delete('/user/:id',userController.deleteUser);

module.exports = router;