const express = require('express');
const {createUser,getUser,updateUser,deleteUser} = require('../controllers/userController');
const router = express.Router();

// POST
router.post('/user',createUser);

// GET
router.get('/user/:id',getUser);

// PUT
router.put('/user/:id',updateUser);

// DELETE
router.delete('/user/:id',deleteUser);

module.exports = router;