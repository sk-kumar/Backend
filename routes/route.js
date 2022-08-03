const express = require('express');
const {createUser,getUser,updateUser,deleteUser, loginUser} = require('../controllers/userController');
const { auth } = require('../middlewares/auth');
const router = express.Router();

// POST
router.post('/register', createUser);
router.post('/login', loginUser);

// GET
router.get('/user/:id',auth,getUser);

// PUT
router.put('/user/:id',auth,updateUser);

// DELETE
router.delete('/user/:id',auth,deleteUser);

module.exports = router;